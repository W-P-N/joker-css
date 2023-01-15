interface Children {
    children: String | JSX.Element
}

export const Card = () => {
    return (
        <div className="border absolute shadow-md">
            <img src="https://images.pexels.com/photos/6605310/pexels-photo-6605310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="h-80 " alt="" />
            <div className="text-center">
                <h3>Hi there, I am Croissant</h3>
                <hr />
                <p>Croissant sont tres bon!</p>
            </div>
            { }
        </div>
    )
}
