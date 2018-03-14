import * as React from "react"
import MaterialIconButton from "material-ui/IconButton"
import Icon from "material-ui/Icon"
import Badge from "material-ui/Badge"

export interface Props {
    children?: React.ReactNode
    onClick(): void
    badge?: number
    icon: string
}

export interface State {
}

export default class IconButton extends React.Component<Props, State> {
    withBadge(content: any) {
        if (this.props.badge && this.props.badge > 0) {
            return <Badge badgeContent={this.props.badge} color="secondary">{content}</Badge>
        } else {
            return content
        }
    }

    render() {
        return (
            <MaterialIconButton color="inherit" onClick={this.props.onClick}>
                {this.withBadge(<Icon>{this.props.icon}</Icon>)}
            </MaterialIconButton>
        )
    }
}
