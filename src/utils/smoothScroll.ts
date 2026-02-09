export function smoothScroll(
	linkSelector: string,
	offsetSelector?: string,
) {
	document.querySelectorAll<HTMLAnchorElement>(linkSelector).forEach((link) => {
		link.addEventListener("click", (e) => {
			const href = link.getAttribute("href");
			if (!href) return;

			const target = document.querySelector(href);
			if (!target) return;

			e.preventDefault();

			const offset = offsetSelector
				? document.querySelector(offsetSelector)?.getBoundingClientRect().height ?? 0
				: 0;

			const top = target.getBoundingClientRect().top + window.scrollY - offset;
			window.scrollTo({ top, behavior: "smooth" });
		});
	});
}