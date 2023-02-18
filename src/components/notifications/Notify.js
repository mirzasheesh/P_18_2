export default function Notify(properties) {

    if (properties.notification) {

        return (<p>{properties.notification}</p>);
    }

    return null;
}