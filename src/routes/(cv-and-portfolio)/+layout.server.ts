export async function load({ url }) {
    const tabs = [
        { label: "CV", href: "/cv/" },
        { label: "Portfolio", href: "/portfolio/" }
    ];
	return {
        tabs,
		activeTab: tabs.findIndex(tab => url.pathname.endsWith(tab.href)),
	};
}
