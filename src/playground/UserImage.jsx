
function AdditionalDesc() {
    return (
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita incidunt reiciendis eos vitae, alias, eligendi a, omnis quia vero non repellat. Itaque commodi quos magnam, recusandae quisquam sunt minima sint!
        </p>
    )
}

function UserImage() {
    return (
        <div className="img-wrap">
            <figure>
                <img src="{logo}" alt="" />
                <figcaption>React logo</figcaption>
            </figure>
            <AdditionalDesc />
        </div>
    )
}

export default UserImage;