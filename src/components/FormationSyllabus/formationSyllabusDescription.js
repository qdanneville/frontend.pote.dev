export const FormationSyllabusDescription = (props) => {
    return (
        <div>
            <h4 className="text-3xl text-dark-blue-900 underline">Syllabus</h4>
            <p className="mt-4 text-md">
                {props.description}
            </p>
        </div>)
}