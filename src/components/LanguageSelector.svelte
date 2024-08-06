<script lang="ts">
	import { IconChevronDown, IconChevronUp } from "@tabler/icons-svelte";

	export let locales: string[];
    let open: boolean = false;
    $: activeLang = locales[0];
</script>

<div>
<button on:click={() => open = !open} on:blur={() => open = false}>
    {activeLang}
    {#if open}
    <IconChevronUp size={15} stroke={1} />
    {:else}
    <IconChevronDown size={15} stroke={1} />
    {/if}
</button>
<ul class={open ? 'list' : 'hide'}>
    {#each locales as lang}
        <li>
            <button  on:click={() => activeLang = lang}>
            {lang}
            </button>
        </li>
    {/each}
</ul>
</div>

<style lang="scss">
    @import '../styles/colors.scss';
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