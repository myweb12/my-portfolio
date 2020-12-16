import React { useEffect, useState }from "react";

import sanityClient from "./client.js";

export default function Project() {

    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`* [_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags

        }`). then((data) => setProjectData(data))
        .catch (console.error) ;


    },[]);

    return (
        <main>
            <section>
                <h1></h1>
                <h2></h2>
                <section>
                    <article>
                        <h3></h3>
                        <div>
                            <span>                 
                            </span>
                            <span>                 
                            </span>
                            <span>                 
                            </span>
                            <p>

                            </p>
                            <span></span>
                        </div>
                    </article>
                </section>
            </section>
        </main>
    )

}