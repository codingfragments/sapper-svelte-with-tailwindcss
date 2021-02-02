import sveltePreprocess from 'svelte-preprocess';

const preprocess = sveltePreprocess({
    postcss: true,
});
module.exports = {
    preprocess: preprocess
};
