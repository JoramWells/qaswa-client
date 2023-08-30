
const PrimaryButton = ({onClick}) => {
    return (

        <div className="m-auto block w-3/4">
            <button className="primaryBtn w-full lg:w-3/4 mt-4 rounded-lg p-2 text-gray-700" 
            onClick={onClick}>Add Item</button>

        </div>
    )
}

export default PrimaryButton