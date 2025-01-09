<script>
    import {wsx} from "@axel669/zephyr"
</script>

<style>
    :global([ws-x~="@@theme:dark"]) {
        --trebek-blue: #081476;
        --trebek-gold: #fba61c;

        --primary: #4955d8;
        --primary-ripple: #4955d860;
        --secondary: var(--trebek-gold);
        --secondary-ripple: #fba61c60;
        --background: #121319;
        --background-layer: #323339;

        --text-light: #ffffffc0;
        --text-color-secondary: #ffffff80;
    }
</style>

<svelte:body use:wsx={{"@@theme": "dark", "@@app": true}} />
