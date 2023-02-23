<script>
    import {DarkTheme, css} from "svelte-doric"

    const custom = css`
        @font-face {
            font-family: "Barlow Condensed Medium";
            src: url("fonts/BarlowCondensed-Medium.ttf");
        }

        body {
            --font: "Barlow Condensed Medium";
            --background: #0b1e3c;

            --primary: #60b8fe;
            --primary-light: #badffe;
            --primary-ripple: #60b8fe60;
            --secondary: #ffdd81;
            --secondary-ripple: #ffdd8160;

            --text-size: 20px;
        }
    `
</script>

<DarkTheme />
{@html custom}
