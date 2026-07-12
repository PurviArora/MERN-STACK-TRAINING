const Child = (props) => {
    console.log(props)
    return(
        <>
            <h1>Child Component</h1>
            <h2>Hello {props.fname} </h2>
        </>
    )
}

export default Child;