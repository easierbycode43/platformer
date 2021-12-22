const c = [
	() => import("../components/layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/LoadingBar.svelte"),
	() => import("../../../src/routes/BabyFish.svelte"),
	() => import("../../../src/routes/BigFish.svelte"),
	() => import("../../../src/routes/Bobomb.svelte"),
	() => import("../../../src/routes/Chucka.svelte"),
	() => import("../../../src/routes/Lakitu.svelte"),
	() => import("../../../src/routes/Player.svelte"),
	() => import("../../../src/routes/Skelly.svelte"),
	() => import("../../../src/routes/Chomp.svelte"),
	() => import("../../../src/routes/Fish.svelte"),
	() => import("../../../src/routes/Wall.svelte"),
	() => import("../../../src/routes/Ryu.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/LoadingBar.svelte
	[/^\/LoadingBar\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/BabyFish.svelte
	[/^\/BabyFish\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/BigFish.svelte
	[/^\/BigFish\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/Bobomb.svelte
	[/^\/Bobomb\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/Chucka.svelte
	[/^\/Chucka\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/Lakitu.svelte
	[/^\/Lakitu\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/Player.svelte
	[/^\/Player\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/Skelly.svelte
	[/^\/Skelly\/?$/, [c[0], c[10]], [c[1]]],

	// src/routes/Chomp.svelte
	[/^\/Chomp\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/Fish.svelte
	[/^\/Fish\/?$/, [c[0], c[12]], [c[1]]],

	// src/routes/Wall.svelte
	[/^\/Wall\/?$/, [c[0], c[13]], [c[1]]],

	// src/routes/Ryu.svelte
	[/^\/Ryu\/?$/, [c[0], c[14]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];