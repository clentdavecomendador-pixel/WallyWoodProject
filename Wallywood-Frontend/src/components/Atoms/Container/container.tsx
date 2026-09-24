type ContainerProps = {
    id: string;
    children: React.ReactNode;
}
export const Container = ({id, children}: ContainerProps) => {
    return(
        <div id={id}>
            {children}
        </div>
    )
}