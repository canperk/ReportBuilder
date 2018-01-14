declare global  {
    interface Window {
        $: any;
        jQuery: any;
    }
    interface JQuery {
        ribbon(): void;
    }
}
export {};
