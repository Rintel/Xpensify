import * as React from "react"
import Skeleton from "../../Components/Skeleton/Skeleton"

export interface Props {
}

export interface State {
}

export default abstract class BaseScene<P extends Props, S extends State> extends React.Component<P, S> {

    abstract renderContent(): JSX.Element

    render() {
        return (
            <Skeleton>
                {this.renderContent()}
            </Skeleton>
        )
    }
}
