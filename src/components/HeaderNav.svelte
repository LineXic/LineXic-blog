<script lang="ts">
    import {SITE_MENU} from "@/consts";
    import {onDestroy, onMount} from 'svelte';
    import type {OptionalValue} from "@/utils/types";
    /*interface Props {
        avatar?: import('svelte').Snippet;
    }
    let { avatar }: Props = $props();*/
    const navBarClassNameBase = "absolute -translate-x-2/4 left-2/4 h-[var(--navBar-height)] md:h-[inherit] backdrop-blur-2xl bg-white/80 dark:bg-primary-950 dark:bg-primary-950/80 shadow-2xl [transition:top_150ms,height_400ms_cubic-bezier(.47,1.64,.41,.8)] overflow-clip";
    const navBarClassNameTop = "rounded-[2.25rem] top-4 w-[calc(100dvw-2rem)] md:w-max";
    const navBarClassNameNormal = "w-full top-0 shadow-[rgba(0,0,0,0.15)]";
    // 移动端菜单 a11y ID
    const mobileMenuId = "koi-mobile-menu-list";
    // 高度基准数值 (rem)
    const mobileNavBaseHeight = 4.5;
    const mobileMenuBaseHeight = 1.5;
    const mobileMenuItemHeight = 3.5;
    // 外部参考元素
    let navBackground: OptionalValue<HTMLElement> = $state();
    let navScrollNotice: OptionalValue<HTMLElement> = $state();
    // 状态机
    let navBarClassName = $state(navBarClassNameTop);
    let mobileMenuOpen = $state(false);
    let mobileNavHeight = $state(mobileNavBaseHeight);
    // 为什么要这么麻烦的计算导航栏的高度呢？
    // 因为如果不手动指定高度，浏览器不知道你要过渡到什么高度，就会导致 transition 失效
    // 参考 https://stackoverflow.com/questions/3508605/how-can-i-transition-height-0-to-height-auto-using-css
    $effect(() => {
        if (mobileMenuOpen) {
            mobileNavHeight = mobileNavBaseHeight + mobileMenuBaseHeight + (mobileMenuItemHeight * SITE_MENU.length);
        } else {
            mobileNavHeight = mobileNavBaseHeight;
        }
    })
    function handleScroll() {
        if (navBackground && window.scrollY > navBackground.getBoundingClientRect().height * (1 / 1.618)) {
            navBarClassName = navBarClassNameNormal;
        } else {
            navBarClassName = navBarClassNameTop;
        }
        if (navScrollNotice) {
            if (window.scrollY > 64) {
                navScrollNotice.classList.add("opacity-0");
            } else {
                navScrollNotice.classList.remove("opacity-0");
            }
        }
    }
    // 移动端菜单按钮及动画
    let menuTimer: any;
    let menuItemTimer: any;
    let menuStep = $state(1);
    let menuStepMiddle = $state(1);
    let menuItemHidden = $state(true);
    function handleMobileMenuToggle(to = !mobileMenuOpen) {
        mobileMenuOpen = to;
        clearTimeout(menuTimer);
        clearTimeout(menuItemTimer);
        menuStep = 2;
        // 如果菜单已经打开，执行开启动画，反之执行关闭动画
        if (mobileMenuOpen) {
            menuStepMiddle = 1;
            menuTimer = setTimeout(() => {
                menuStep = 3;
                menuStepMiddle = 2;
            }, 200);
            menuItemHidden = false;
        } else {
            menuStepMiddle = 2;
            menuTimer = setTimeout(() => {
                menuStep = 1;
                menuStepMiddle = 1;
            }, 200);
            menuItemTimer = setTimeout(() => {
                menuItemHidden = true;
            }, 400);
        }
    }
    onMount(() => {
        navBackground = document.getElementById("navBackground");
        navScrollNotice = document.getElementById("navScrollNotice");
        globalThis?.addEventListener?.("scroll", handleScroll);
        handleScroll();
    });
    onDestroy(() => {
        clearTimeout(menuTimer);
        clearTimeout(menuItemTimer);
        globalThis?.removeEventListener?.("scroll", handleScroll);
    });
</script>

<nav class="fixed w-full top-0 z-40">
    <div id="navBar" class={navBarClassNameBase + " " + navBarClassName} style={`--navBar-height: ${mobileNavHeight}rem`}>
        <div class="flex justify-between md:justify-center items-center gap-8 ps-3 pe-3 py-3">
            <a href="/" class="block flex-none" title="首页">
                 <slot name="avatar"></slot>
            </a >
            <ul class="hidden md:contents">
                {#each SITE_MENU as e}
                    <li class="contents">
                        <a class="text-base leading-6 h-6 block text-black dark:text-white hover:text-accent-600 dark:hover:text-accent-500 transition-colors duration-200 flex-none"
                           href={e.href} target={e.target}>{e.title}</a >
                    </li>
                {/each}
            </ul>
            <div class="flex flex-none">
                <a aria-label="开往下一个站点"
                   class="w-12 h-12 flex items-center justify-center rounded-full -ms-3 text-black dark:text-white transition-colors bg-white/0 active:bg-white/10"
                   href="https://www.travellings.cn/go.html"
                   target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="1408" height="1408" viewBox="0 0 24 24">
                    <path fill="#cccccc" d="M12 2c-4 0-8 .5-8 4v9.5A3.5 3.5 0 0 0 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19a3.5 3.5 0 0 0 3.5-3.5V6c0-3.5-3.58-4-8-4M7.5 17A1.5 1.5 0 0 1 6 15.5A1.5 1.5 0 0 1 7.5 14A1.5 1.5 0 0 1 9 15.5A1.5 1.5 0 0 1 7.5 17m3.5-7H6V6h5zm2 0V6h5v4zm3.5 7a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5"/>
                </svg>
                </a>
                <button onclick={() => handleMobileMenuToggle()}
                        aria-label="打开菜单"
                        aria-controls={mobileMenuId}
                        aria-expanded={mobileMenuOpen}
                        class="w-12 h-12 md:hidden flex items-center justify-center rounded-full md:-ms-3 transition-colors bg-white/0 active:bg-white/10">
                    <span class="block relative w-5 h-5" aria-hidden="true">
                        <span class={`duration-200 block w-5 h-[0.225rem] bg-black dark:bg-white rounded-full burger-bar-1 burger-bar-1--s${menuStep} absolute left-1/2`}></span>
                        <span class={`duration-200 block w-5 h-[0.225rem] bg-black dark:bg-white rounded-full burger-bar-2 burger-bar-2--s${menuStepMiddle} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}></span>
                        <span class={`duration-200 block w-5 h-[0.225rem] bg-black dark:bg-white rounded-full burger-bar-3 burger-bar-3--s${menuStep} absolute left-1/2`}></span>
                    </span>
                </button>
            </div>
        </div>
        <div class={`flex flex-col items-center md:hidden ${menuItemHidden ? "hidden" : ""}`} id={mobileMenuId}>
            <hr class={`w-[calc(100%-1.5rem)] transition-colors duration-400 ${mobileMenuOpen ? "border-black/10 dark:border-white/10" : "border-transparent"}`}>
            <ul class="w-full p-3">
                {#each SITE_MENU as e}
                    <li class="contents">
                        <a onclick={() => handleMobileMenuToggle(false)}
                           class="text-xl leading-6 h-14 flex items-center justify-center text-black dark:text-white hover:text-accent-600 dark:hover:text-accent-500 transition-colors duration-200 flex-none"
                           href={e.href} target={e.target}>{e.title}</a >
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</nav>

<style>
    .burger-bar-1--s1 {
        top: 0;
        transform: translate(-50%, 0);
    }
    .burger-bar-1--s2 {
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .burger-bar-1--s3 {
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg) scale(1.3);
        height: 0.2rem;
    }
    .burger-bar-2--s1 {
        display: block;
    }
    .burger-bar-2--s2 {
        display: none;
    }
    .burger-bar-3--s1 {
        bottom: 0;
        transform: translate(-50%, 0);
    }
    .burger-bar-3--s2 {
        bottom: 50%;
        transform: translate(-50%, 50%);
    }
    .burger-bar-3--s3 {
        bottom: 50%;
        transform: translate(-50%, 50%) rotate(-45deg) scale(1.3);
        height: 0.2rem;
    }
</style>