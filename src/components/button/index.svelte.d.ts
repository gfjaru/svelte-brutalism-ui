import { SvelteComponent } from "svelte";
import type { MouseEventHandler } from 'svelte/elements';
import './style.scss';
declare const __propDef: {
    props: {
        block?: boolean | undefined;
        label?: string | undefined;
        href?: string | undefined;
        onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
        variant?: "primary" | "danger" | "warning" | "success" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponent<IndexProps, IndexEvents, IndexSlots> {
}
export {};
