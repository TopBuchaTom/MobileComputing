export class ObjectUtil {
    static includesNestedPropertyValue(obj, propertyPath, value) {
        const properties = propertyPath.split(".");
        return properties.reduce((agg, currentPropName) => agg?.[currentPropName], obj)?.toLowerCase().includes(value?.toLowerCase());
    }   
}