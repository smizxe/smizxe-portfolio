// Automatically import all images from the assets/feedback folder
// This uses Vite's glob import feature: https://vitejs.dev/guide/features.html#glob-import

const modules = import.meta.glob('../assets/feedback/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default'
});

export const feedbackImages = Object.values(modules) as string[];
