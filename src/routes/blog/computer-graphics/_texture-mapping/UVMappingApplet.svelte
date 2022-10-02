<div class="applet">
    <canvas class="canvas" bind:this={canvas} id="demo-canvas" width="800" height="400"></canvas>
    <form bind:this={settingsForm}>
        <input on:input={formSelection} id="linear-interpolation-mode-bilinear" name="image-interpolation-mode" type="radio" value="true" selected={true}/>
        <label for="linear-interpolation-mode-bilinear">Bilinear</label>
        <input on:input={formSelection} id="linear-interpolation-mode-nearest-neighbour" name="image-interpolation-mode" type="radio" value="false"/>
        <label for="linear-interpolation-mode-nearest-neighbour">Nearest Neighbour</label>
    </form>
    <p>
        Note: CanvasRenderingContext2D is assumed to use bilinear mapping for image smoothing.
    </p>
</div>

<style scoped>
    .applet {
        padding: 1em;
        background-color: palegoldenrod;
        color: black;
    }

    .canvas {
        display: block;
        width: 90%;
        max-width: 800px;
        height: auto;
        margin: auto;
        border: 1px solid black;
    }
</style>
<script>
    import { onMount } from "svelte";
    export let canvas, settingsForm;
    let ctx, image;

    onMount(() => {
        ctx = canvas.getContext("2d");

        image = new Image(3500, 3500);
        image.src = "../_texture-mapping/snowboarder_original.png";
        getBRect();

        canvas.addEventListener("pointerdown", pd);
        canvas.addEventListener("pointerup", pu);
        canvas.addEventListener("pointermove", pm);

        image.addEventListener("load", e => render(mappingInformation, uvWorld));
    });

    let mappingInformation = {
        scene: {
            p0: [0, 0],
            p1: [0.5, 1],
            p2: [1, 0]
        },
        texture: {
            p0: [0, 0],
            p1: [0, 1],
            p2: [1, 0]
        }
    };

    let uvWorld = [0, 0, 0, 0];

    const margins = 10;
    const size = 400;
    const viewBox = { width: size, height: size, margins: margins };

    const formData = {
        imageInterpolationMode: true,
    };

    const Vector = {
        add(a, b) { return [a[0] + b[0], a[1] + b[1]] },
        sub(a, b) { return [a[0] - b[0], a[1] - b[1]] },
        scale(f, a) { return [f * a[0], f * a[1]] },
        dot(a, b) { return a[0] * b[0] + a[1] * b[1] },
        transpose([a, b]) { return [[a[0], b[0]], [a[1], b[1]]]; },
        transform(m, v) { return Vector.add(Vector.scale(v[0], m[0]), Vector.scale(v[1], m[1])) },
    };

    function multiplyMatrices(m1, m2) {
        return [Vector.transform(m1, m2[0]), Vector.transform(m1, m2[1])];
    }

    function matrixInverse(m) {
        const det = 1 / (m[0][0] * m[1][1] - m[0][1] * m[1][0]);

        return [[det * m[1][1], -det * m[0][1]], [-det * m[1][0], det * m[0][0]]];
    }

    function setCanvasMatrix(mappingInformation) {
        const sceneToObjectTranslation = mappingInformation.scene.p0;
        const iVecScene = Vector.sub(mappingInformation.scene.p2, mappingInformation.scene.p0);
        const jVecScene = Vector.sub(mappingInformation.scene.p1, mappingInformation.scene.p0);

        const objectToTextureTranslation = Vector.scale(-1, mappingInformation.texture.p0);
        const iVecTexture = Vector.sub(mappingInformation.texture.p2, mappingInformation.texture.p0);
        const jVecTexture = Vector.sub(mappingInformation.texture.p1, mappingInformation.texture.p0);

        const sceneToObject = [iVecScene, jVecScene];
        const objectToTexture = matrixInverse([iVecTexture, jVecTexture]);

        const sceneToTexture = multiplyMatrices(sceneToObject, objectToTexture);

        const transformBefore = Vector.transform(sceneToTexture, objectToTextureTranslation);

        ctx.transform(
            ...sceneToTexture[0],
            ...sceneToTexture[1],
            ...Vector.add(transformBefore, sceneToObjectTranslation)
        );
    }

    function setCanvasMatrixForTextureTriangle(mappingInformation) {
        const objectToTextureTranslation = mappingInformation.texture.p0;
        const iVecTexture = Vector.sub(mappingInformation.texture.p2, mappingInformation.texture.p0);
        const jVecTexture = Vector.sub(mappingInformation.texture.p1, mappingInformation.texture.p0);

        const objectToTexture = [iVecTexture, jVecTexture];

        ctx.transform(
            ...objectToTexture[0],
            ...objectToTexture[1],
            ...objectToTextureTranslation
        );
    }

    function getUVScene(uvWorld) {
        const sceneToObjectTranslation = mappingInformation.scene.p0;
        const iVecScene = Vector.sub(mappingInformation.scene.p2, mappingInformation.scene.p0);
        const jVecScene = Vector.sub(mappingInformation.scene.p1, mappingInformation.scene.p0);

        return Vector.transform(matrixInverse([iVecScene, jVecScene]), Vector.sub([uvWorld[0], uvWorld[1]], sceneToObjectTranslation));
    }

    function getUVTexture(uvWorld) {
        const objectToTextureTranslation = mappingInformation.texture.p0;
        const iVecTexture = Vector.sub(mappingInformation.texture.p2, mappingInformation.texture.p0);
        const jVecTexture = Vector.sub(mappingInformation.texture.p1, mappingInformation.texture.p0);

        return Vector.transform(matrixInverse([iVecTexture, jVecTexture]), Vector.sub([uvWorld[0], uvWorld[1]], objectToTextureTranslation));
    }

    function getVectorsScene(uv) {
        const sceneToObjectTranslation = mappingInformation.scene.p0;
        const iVecScene = Vector.sub(mappingInformation.scene.p2, mappingInformation.scene.p0);
        const jVecScene = Vector.sub(mappingInformation.scene.p1, mappingInformation.scene.p0);

        const transformed = uv;

        return {
            start: sceneToObjectTranslation,
            iScaled: Vector.add(sceneToObjectTranslation, Vector.scale(transformed[0], iVecScene)),
            jScaled: Vector.add(sceneToObjectTranslation, Vector.scale(transformed[1], jVecScene)),
            i: Vector.add(sceneToObjectTranslation, Vector.scale(1, iVecScene)),
            j: Vector.add(sceneToObjectTranslation, Vector.scale(1, jVecScene)),
        };
    }

    function getVectorsTexture(uv) {
        const objectToTextureTranslation = mappingInformation.texture.p0;
        const iVecTexture = Vector.sub(mappingInformation.texture.p2, mappingInformation.texture.p0);
        const jVecTexture = Vector.sub(mappingInformation.texture.p1, mappingInformation.texture.p0);

        const transformed = uv;

        return {
            start: objectToTextureTranslation,
            iScaled: Vector.add(objectToTextureTranslation, Vector.scale(transformed[0], iVecTexture)),
            jScaled: Vector.add(objectToTextureTranslation, Vector.scale(transformed[1], jVecTexture)),
            i: Vector.add(objectToTextureTranslation, Vector.scale(1, iVecTexture)),
            j: Vector.add(objectToTextureTranslation, Vector.scale(1, jVecTexture)),
        };
    }

    function render(mappingInformation, uvWorld) {
        const uv = [getUVTexture, getUVScene][uvWorld[3]](uvWorld);

        ctx.resetTransform();
        ctx.clearRect(0, 0, 2 * size, size);

        /* Texture Pane (Left) */
        ctx.imageSmoothingEnabled = false;
        ctx.setTransform(size - 2 * margins, 0, 0, size - 2 * margins, margins, margins);
        ctx.fillRect(0, 0, 1, 1);
        ctx.drawImage(image, 0, 0, 1, 1);

        ctx.beginPath();
        ctx.moveTo(...mappingInformation.texture.p0);
        ctx.lineTo(...mappingInformation.texture.p1);
        ctx.lineTo(...mappingInformation.texture.p2);
        ctx.closePath();

        ctx.strokeStyle = "white";
        ctx.lineWidth = 1 / 100;

        ctx.stroke();

        const vecTex = getVectorsTexture(uv);

        ctx.lineWidth = 2 / 100;
        ctx.beginPath();
        ctx.moveTo(...vecTex.start);
        ctx.lineTo(...vecTex.iScaled);
        ctx.strokeStyle = "aqua";
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(...vecTex.start);
        ctx.lineTo(...vecTex.jScaled);
        ctx.strokeStyle = "red";
        ctx.stroke();
        ctx.closePath();

        /* Scene Pane (Right) */
        ctx.imageSmoothingEnabled = formData.imageInterpolationMode;
        ctx.setTransform(size - 2 * margins, 0, 0, size - 2 * margins, margins + size, margins);

        ctx.save();
        
        //ctx.clearRect(-(margins / size), -(margins / size), 1 + (margins / size), 1 + (margins / size));
        ctx.beginPath();
        ctx.moveTo(...mappingInformation.scene.p0);
        ctx.lineTo(...mappingInformation.scene.p1);
        ctx.lineTo(...mappingInformation.scene.p2);
        ctx.closePath();
        ctx.clip();

        setCanvasMatrix(mappingInformation);
        ctx.drawImage(image, 0, 0, 1, 1);

        ctx.restore();

        const vecScene = getVectorsScene(uv);

        ctx.lineWidth = 2 / 100;
        ctx.beginPath();
        ctx.moveTo(...vecScene.start);
        ctx.lineTo(...vecScene.iScaled);
        ctx.strokeStyle = "aqua";
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(...vecScene.start);
        ctx.lineTo(...vecScene.jScaled);
        ctx.strokeStyle = "red";
        ctx.stroke();
        ctx.closePath();

        /* General (arrow etc.) */
        ctx.setTransform(size - 2 * margins, 0, 0, size - 2 * margins, margins, margins);
    }

    function getBRect() {
        bRect = canvas.getBoundingClientRect();
    }
    var bRect;

    const movables = [
        [
            Object.values(mappingInformation.texture),
            Object.values(mappingInformation.scene)
        ]
    ];

    let pointerId, movedVertex;

    function getLocal(cx, cy) {
        getBRect();
        const offsetX = 2 * viewBox.width * (cx - bRect.left) / bRect.width;
        const offsetY = 1 * viewBox.width * (cy - bRect.top) / bRect.height;

        const column = Math.floor(offsetX / viewBox.width);
        const row = Math.floor(offsetY / viewBox.height);

        const x = (offsetX - column * viewBox.width - viewBox.margins) / (viewBox.width - 2 * viewBox.margins);
        const y = (offsetY - row * viewBox.height - viewBox.margins) / (viewBox.height - 2 * viewBox.margins);

        return [x, y, row, column];
    }

    function updateMouseCoords(cx, cy) {
        uvWorld = getLocal(cx, cy);
    }

    function setPointerLocation(cx, cy) {
        const [x, y, row, column] = getLocal(cx, cy);

        let distance = Infinity;
        let corner;

        for (let c of movables[row][column]) {
            const distNew = Math.hypot(c[0] - x, c[1] - y);
            if (distNew < distance) {
                distance = distNew;
                corner = c;
            }
        }

        corner[0] = x;
        corner[1] = y;

        return corner;
    }

    function pd(e) {
        e.preventDefault();
        if (!pointerId) {
            pointerId = e.pointerId;
            movedVertex = setPointerLocation(e.clientX, e.clientY);
        }
    }
    function pm(e) {
        e.preventDefault();
        updateMouseCoords(e.clientX, e.clientY);
        if (e.pointerId == pointerId) setPointerLocation(e.clientX, e.clientY);
        render(mappingInformation, uvWorld);
    }
    function pu(e) {
        e.preventDefault();
        if (e.pointerId == pointerId) {
            pointerId = undefined;
            movedVertex = undefined;
        }
    }

    function formSelection(e) {
        const data = new FormData(settingsForm);
        formData.imageInterpolationMode = data.get("image-interpolation-mode") == "true";
        render(mappingInformation, uvWorld);
    }

</script>