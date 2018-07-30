/**Developed by BL Contenets team.*/

//%color=#01DF01 icon="\uf043" block="watersensor"

namespace watersensor {

    /**Read the analog output from the water sensor */
    //%block="water sensor read pin %arg_pin"
    //%blockId=watersesnorreading
    //%arg_pin.fieldEditor="gridpicker" arg_pin.fieldOptions.columns=5 arg_pin.defl=AnalogPin.P1
    export function watersensorreading(arg_pin: AnalogPin): number {
        let x = -1 * pins.analogReadPin(arg_pin)
        return pins.map(x, -1023, 0, 0, 1023)
    }
}