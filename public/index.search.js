var relearn_search_index = [
  {
    "content": "/* * ShaderMania 1.5 * * Nodes are shaders or images. The currently selected node is rendered in the preview. You can easily change * which shader is rendered by just selecting it. The selection state is saved with the project. * * You can add nodes from existing shaders from the Shader Library by clicking on the shader and selecting \"Add to Project\". * * For more information have a look at the Wiki at https://github.com/markusmoenig/ShaderMania/wiki * */ // Incoming Data structure typedef struct { float2 uv; // UV coordinate 0..1 float2 viewSize; // Viewport size float2 fragCoord; // uv * viewSize float time; // Global time in seconds unsigned int frame; // Frame number float4 outColor; // The resulting RGBA color, set to (0,0,0,1) by default texture2d\u003cfloat\u003e slot0; // The 4 texture input slots texture2d\u003cfloat\u003e slot1; texture2d\u003cfloat\u003e slot2; texture2d\u003cfloat\u003e slot3; } Data; // Variables with UI parameters, parameter data is stored and reset when the parameter name changes // Up to 10 parameters per node / shader are supported // Float slider parameter float size = ParamFloat\u003cUI: \"Slider\", name: \"Parameter Name\", min: 0, max: 1, default: 0.8\u003e // Float3 color picker parameter float3 diskColor = ParamFloat3\u003cUI: \"Color\", name: \"Parameter Name\", default: #ffffff\u003e // Url, ShaderMania will add https:// at the front automatically ParamUrl\u003cname: \"Watch Tutorial\", url: \"url without https://\"\u003e // Input slots (up to 4 are supported per node) texture2d\u003cfloat\u003e input = ParamInput\u003cname: \"Input Slot Name\"\u003e // To read from input slots getLinearSample(texture2d\u003cfloat\u003e, float2 coord); getNearestSample(texture2d\u003cfloat\u003e, float2 coord); ",
    "description": "",
    "tags": null,
    "title": "Shaders",
    "uri": "/shadermania/shaders/index.html"
  },
  {
    "content": "Render-Z - pronounced Render That - is a visual Metal shader editor for macOS and iPadOS. Render-Z is open source and licensed under the MIT.\nRender-Z is currently available via TestFlight for macOS and iPadOS, use the link here.\nDevelopers Create and Edit Shaders Visually Simply drag and drop functions and variables Integrated workflow for being able to create complex expressions Share functions and shaders via iCloud publically or privately Expose variables to artists Artists use Gizmos to edit Variables Variables exposed by developers can be edited by Gizmos in the Artist Editor A timeline for variables makes animation easy Export images and videos Use Render-Z to Learn and explore the Metal shader language Create demos and presentations utilizing Metal shaders Raytrace images of procedural content with the integrated BSDF Pathracer (WiP) ",
    "description": "",
    "tags": null,
    "title": "Render-Z",
    "uri": "/render-z/index.html"
  },
  {
    "content": " Create, edit, share Metal shaders on macOS and iPadOS ShaderMania features live coding of Metal fragment shaders with realtime preview and playback. Shaders are displayed as nodes which can be connected as needed.\nShaderMania features a database of public shaders including tutorial shaders with links to explanation videos.\nA physical keyboard is recommended for coding shaders.\nFeatures\nFlexible node system supporting Shaders and Images. Named input slots for shaders can be created inside the shader source code. Connect shader nodes to be able to chain shaders. Optional abstracted parameter definition which supports display of variables as sliders to live change shader values in the user interface. Tutorial shaders can display a button with a link to their video urls. Realtime syntax check and compilation of your shaders with realtime preview. Render to custom resolutions and export your shader output to PNG. Display of syntax errors and warnings. Database\nUpload your shaders to the public shader database Browse shaders in the Database and learn / experiment. Add the shader nodes from the database to your project. How to help Rating or reviewing ShaderMania in the AppStore is a great help as it improves visibility.\nRender-Z If you like ShaderMania, try out Render-Z, my visual Metal editor.\nGet Involved Join my Discord and get involved in everything ShaderMania.\nAcknowledgements Thanks to The Art of Code for allowing me to use his tutorial shaders. Thanks to Kali for allowing me to use his Fractal Land shader for the app. ",
    "description": "",
    "tags": null,
    "title": "ShaderMania",
    "uri": "/shadermania/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "content": "A list of people without whom this project would not be possible.\nAcknowledgements ",
    "description": "",
    "tags": null,
    "title": "Credits",
    "uri": "/more/credits/index.html"
  },
  {
    "content": "Hi there 👋 I am an open source graphics developer and here is a list of the applications I am currently working on.\nMy apps are mostly written in Metal / Swift for the Apple ecosystem or cross-platform via Rust.\nIf you want to get in contact to talk about bugs or provide feedback or ideas join my Discord or send an eMail.\nYou can buy me a coffee or you can also become a GitHub Sponsor.\nYou can follow me on Twitter or Mastodon.\nHere are my applications.\nEldiron Eldiron is a cross-platform creator for classic role-playing-games (RPGs). It’s main aim is to create games similar to the RPGs of the 80’s and 90’s but with modern features as well as support for single and multi-player experiences.\nOverview\nDevelopment Status: Active. v1 in 2024. Languages: Rust Current Version: v0.89 License: MIT Website Downloads GitHub Repo RPU RPU is a GLSL compatible programming language for rendering procedural graphics on the CPU.\nAs GPU shaders can limit the complexity of what you can render, RPU aims to provide an alternative way of rendering complex, unlimited procedural graphics on the CPU, in 64-bit or 32-bit precision.\nRPU strives to be compatible with GLSL which means that you can easily port your existing shaders to RPU.\nAlternatively you can also use RPU as a general purpose mathematical scripting language, as it is designed to be fast and embeddable in your applications.\nOverview\nDevelopment Status: Active. v1 in 2024. Languages: Rust Current Version: v0.30 License: MIT Website GitHub Repo ShaderMania ShaderMania is a Metal shader editor for macOS and iPadOS. It is mostly inspired by ShaderToy. It features an integrated code editor, live previews and a node system to connect shaders.\nOverview\nDevelopment Status: Active Languages: Metal, Swift Current Version: v1.55 License: MIT AppStore Link GitHub Repo Planned Features\nText support using a default SDF texture A Lua control script which can call and share parameters with shaders, which would enable interactive presentations and small games. Render-Z Render-Z is a visual Metal shader editor for macOS and iPadOS. Visually create Metal shaders via drag and drop. Render-Z supports workflows to create complex expressions and shaders.\nYou can stack shaders and developers can expose variables to artists which can manipulate them using gizmos.\nOverview\nDevelopment Status: Active. v1 in 2023. Languages: Metal, Swift Current Version: v0.70 License: MIT Documentation TestFlight Link GitHub Repo Denrim Denrim is a 2D game creator utilizing a unique text based approach for game logic and resources. It is highly optimized for the Metal GPU framework and combines ease-of-use with the highest possible performance.\nDenrim utilizes a text based approach to game creation paired with instant previews and visual game state feedback. You do not need to be a developer to create games with Denrim as no scripting languages are used.\nText based behavior trees are easy-to-use yet powerful tools to create game logic and AI. They are easier to use and understand than scripting languages but are natively compiled into Swift and therefore offer the maximum in native performance. During game execution visual feedback of the state of the nodes are provided for easy debugging.\nAn integrated 2D physics engine provides realistic and fast physics for your game.\nOverview\nDevelopment Status: Inactive Languages: Metal, Swift Current Version: v1.06 License: MIT AppStore Link GitHub Repo Planned Features for v2\nSwiftUI IDE Lua scripts which talk to custom Metal shaders Tiled import for maps 2D physics ForgedThoughts ForgedThoughts is a programming language to model 3D objects. The above image was created with:\n// Glass let glass = Cone(0.6, 0.7, 0.6); glass.rounding = 0.2; glass.material.rgb = F3(1.0, 1.0, 1.0); glass.material.roughness = 0.0; glass.material.transmission = 1.0; glass.material.ior = 1.50; let interior = glass.copy(); interior.scale = 0.96; // Fluid let fluid = interior.copy(); fluid.scale -= 0.0002; fluid.material.rgb = F3(\"722F37\").to_linear(); fluid.material.transmission = 1.0; fluid.material.roughness = 0.5; fluid.material.ior = 1.3443705; // Red Wine fluid.material.clearcoat_gloss = 1.0; fluid.material.sheen = 1.0; fluid.material.sheen_tint = 1.0; fluid.max.y = 0.0; glass -= interior; // Top: Smooth Cut Off \u0026 Gold Rim let box = Box(); box.material.rgb = F3(\"d4af37\"); box.material.metallic = 1.0; box.material.roughness = 0.2; box.position.y = 1.5; // Smoothly subtract the box from the glass glass -= Smooth(box, 0.01); // Create a groove with the gold material of the box glass += Groove(box, 0.001, 0.07); Overview\nDevelopment Status: Active. Although I need some new inspirations and ideas. Languages: Rust Current Version: v0.2 License: MIT Website GitHub Repo ",
    "description": "",
    "tags": null,
    "title": "Home",
    "uri": "/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
