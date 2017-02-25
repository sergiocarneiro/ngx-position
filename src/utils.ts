import { Axis } from './types';

export class Utils
{
    /**
     * Adds an event to the object without overriding the default one
     */
    static addEvent (object: any, type: any, callback: any) {
        if (object == null || typeof(object) == 'undefined') return;
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
        } else if (object.attachEvent) {
            object.attachEvent("on" + type, callback);
        } else {
            object["on"+type] = callback;
        }
    };

    /**
     * Gets an element's computed translation for a given axis.
     * 
     * **Params**:
     * - **element**: Element
     * - **axis**: *x*, *y* or *z*
     * 
     * **Returns**: the amount of translation, in pixels.
     */
    static getComputedTranslate(element: Element, axis: Axis) : number
    {
        if (!getComputedStyle) return;

        let axisID = (axis == "y") ? 1 : (axis == "z") ? 2 : 0;

        let transform = getComputedStyle(element).transform;
        
        // matrix3d
        let match = transform.match(/^matrix3d\((.+)\)$/);
        if (match) {
            return parseFloat(match[1].split(', ')[12 + axisID]);
        }

        // matrix
        match = transform.match(/^matrix\((.+)\)$/);
        if (match) {
            return parseFloat(match[1].split(', ')[4 + axisID]);
        }

        return 0;
    }
}