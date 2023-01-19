"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[900],{9600:(t,e,i)=>{i.d(e,{Zo:()=>u,kt:()=>k});var n=i(6687);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function m(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e){if(null==t)return{};var i,n,a=function(t,e){if(null==t)return{};var i,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var p=n.createContext({}),o=function(t){var e=n.useContext(p),i=e;return t&&(i="function"==typeof t?t(e):m(m({},e),t)),i},u=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var i=t.components,a=t.mdxType,r=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=o(i),c=a,k=s["".concat(p,".").concat(c)]||s[c]||h[c]||r;return i?n.createElement(k,m(m({ref:e},u),{},{components:i})):n.createElement(k,m({ref:e},u))}));function k(t,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=i.length,m=new Array(r);m[0]=c;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[s]="string"==typeof t?t:a,m[1]=l;for(var o=2;o<r;o++)m[o]=i[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},8257:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>p,contentTitle:()=>m,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var n=i(7375),a=(i(6687),i(9600));const r={},m="\ud83d\udce6 Plugins",l={unversionedId:"plugins/index",id:"plugins/index",title:"\ud83d\udce6 Plugins",description:"- alpha-nvim",source:"@site/docs/05-plugins/index.md",sourceDirName:"05-plugins",slug:"/plugins/",permalink:"/plugins/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/configuration/examples"},next:{title:"Extras",permalink:"/plugins/extras"}},p={},o=[],u={toc:o};function s(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-plugins"},"\ud83d\udce6 Plugins"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/goolord/alpha-nvim"},"alpha-nvim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/catppuccin/nvim"},"catppuccin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/hrsh7th/cmp-buffer"},"cmp-buffer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/hrsh7th/cmp-nvim-lsp"},"cmp-nvim-lsp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/hrsh7th/cmp-path"},"cmp-path")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/saadparwaiz1/cmp_luasnip"},"cmp_luasnip")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/stevearc/dressing.nvim"},"dressing.nvim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ggandor/flit.nvim"},"flit.nvim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/rafamadriz/friendly-snippets"},"friendly-snippets")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/lewis6991/gitsigns.nvim"},"gitsigns.nvim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/lukas-reineke/indent-blankline.nvim"},"indent-blankline.nvim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/folke/lazy.nvim"},"lazy.nvim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/LazyVim/LazyVim"},"LazyVim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ggandor/leap.nvim"},"leap.nvim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nvim-lualine/lualine.nvim"},"lualine.nvim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/L3MON4D3/LuaSnip"},"LuaSnip")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/williamboman/mason-lspconfig.nvim"},"mason-lspconfig.nvim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/williamboman/mason.nvim"},"mason.nvim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/echasnovski/mini.ai"},"mini.ai")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/echasnovski/mini.bufremove"},"mini.bufremove")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/echasnovski/mini.comment"},"mini.comment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/echasnovski/mini.indentscope"},"mini.indentscope")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/echasnovski/mini.pairs"},"mini.pairs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/echasnovski/mini.surround"},"mini.surround")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nvim-neo-tree/neo-tree.nvim"},"neo-tree.nvim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/folke/neoconf.nvim"},"neoconf.nvim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/folke/neodev.nvim"},"neodev.nvim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/folke/noice.nvim"},"noice.nvim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/MunifTanjim/nui.nvim"},"nui.nvim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/jose-elias-alvarez/null-ls.nvim"},"null-ls.nvim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/akinsho/nvim-bufferline.lua"},"nvim-bufferline.lua")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/hrsh7th/nvim-cmp"},"nvim-cmp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/neovim/nvim-lspconfig"},"nvim-lspconfig")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SmiteshP/nvim-navic"},"nvim-navic")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/rcarriga/nvim-notify"},"nvim-notify")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/windwp/nvim-spectre"},"nvim-spectre")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"nvim-treesitter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nvim-treesitter/nvim-treesitter-textobjects"},"nvim-treesitter-textobjects")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/JoosepAlviste/nvim-ts-context-commentstring"},"nvim-ts-context-commentstring")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nvim-tree/nvim-web-devicons"},"nvim-web-devicons")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/folke/persistence.nvim"},"persistence.nvim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nvim-lua/plenary.nvim"},"plenary.nvim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nvim-telescope/telescope.nvim"},"telescope.nvim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/folke/todo-comments.nvim"},"todo-comments.nvim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/folke/tokyonight.nvim"},"tokyonight.nvim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/folke/trouble.nvim"},"trouble.nvim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/RRethy/vim-illuminate"},"vim-illuminate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tpope/vim-repeat"},"vim-repeat")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/dstein64/vim-startuptime"},"vim-startuptime")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/folke/which-key.nvim"},"which-key.nvim"))))}s.isMDXComponent=!0}}]);