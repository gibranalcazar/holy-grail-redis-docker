function Header(props){
    console.log(props.data);
    console.log(props.data.left);
    return(
        <>
        <header>
            <PlusMinus section="header" handle={props.handle}/>
            <div className="section">Header:{props.data.header}</div>
            <Data data={props.data}/>
        </header>
        </>
    );

};