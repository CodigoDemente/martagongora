<script lang="ts">
	import { IconChevronDown, IconChevronUp } from "@tabler/icons-svelte";
	import type { Language } from "../../types/language";

	export let languages: Language[];
    export let currentLanguage: string;
  
    let open: boolean = false;
    
    const updateLanguage = (lang: string) => {
        currentLanguage = lang;
    }

</script>

<div>
<button on:click={() => open = !open}>
    {currentLanguage}
    {#if open}
    <IconChevronUp size={15} stroke={1} />
    {:else}
    <IconChevronDown size={15} stroke={1} />
    {/if}
</button>
<ul class={open ? 'list' : 'hide'}>
    {#each languages as lang}
        <li>
            <button  on:click={() => updateLanguage(lang.code)}>
            {lang.code}
            </button>
        </li>
    {/each}
</ul>
</div>

<style lang="scss">
    @import '../../styles/colors.scss';
    div {
        position:relative
    }

    button {
        border: none;
        background-color: transparent;
    }

    .hide {
        display: none;
    }

    .list {
        border-radius: 6px;
        padding: 1rem;
        background-color: $neutral-20;
        list-style: none;
        display: block;
        position: absolute;
        top: 26px;
        right: 0;
    }

</style>