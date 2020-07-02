import { Axis } from "../types";

/**
 * Adds an event to the object without overriding the default one.
 */
export const addEvent = (object: any, type: any, callback: any) =>
{
    if (object == null || typeof(object) === "undefined")
    {
        return;
    }

    if (object.addEventListener)
    {
        object.addEventListener(type, callback, false);
    }
    else if (object.attachEvent)
    {
        object.attachEvent("on" + type, callback);
    }
    else {
        object["on" + type] = callback;
    }
};

/**
 * Gets an element's computed translation for a given axis.
 * @returns The amount of translation, in pixels.
 */
export const getComputedTranslate = (element: Element, axis: Axis): number =>
{
    if (!getComputedStyle)
    {
        return;
    }

    const axisID = (axis === "y") ? 1 : (axis === "z") ? 2 : 0;

    const transform = getComputedStyle(element).transform;

    // matrix3d
    let match = transform.match(/^matrix3d\((.+)\)$/);
    if (match)
    {
        return parseFloat(match[1].split(", ")[12 + axisID]);
    }

    // matrix
    match = transform.match(/^matrix\((.+)\)$/);
    if (match) {
        return parseFloat(match[1].split(", ")[4 + axisID]);
    }

    return 0;
};
