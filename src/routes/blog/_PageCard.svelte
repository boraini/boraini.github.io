<script>
    export let data;
</script>

<div>
    <h1>{data.title}</h1>
    <p>{data.excerpt}</p>
    <img src={data.thumbnail} />
</div>