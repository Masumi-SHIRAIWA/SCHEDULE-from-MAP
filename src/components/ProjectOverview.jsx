import React, { useState } from 'react';
import Router from "next/router";

export const ProjectOverview = (props) => {

    const {project, onCheck} = props;

    const handleChange = () => {
        onCheck(project);
    }

    return (
        <div class="flex items-center ps-3">
            <div class="flex-shrink-0">      
                {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> */}
            </div>
            <label className="flex items-center space-x-4 rtl:space-x-reverse">
                <input type="checkbox" value="" checked={project.done} onChange={handleChange} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            </label>
                                    
            <div onClick={() => Router.push("/p/[id]", `/p/${project.key}`)} class="flex items-center space-x-4">
                <div class="flex-shrink-0">                               
                    <img class="w-10 h-10 rounded-full" src="favicon.ico"/>
                </div>

                <div class="flex-shrink-0">
                    <p class="text-lg font-medium text-gray-900 truncate dark:text-white">
                        {project.name}
                    </p>
                </div>

                <div class="flex-shrink-1  min-w-0 items-center text-base font-normal text-gray-900 dark:text-white">
                    Latest Todo : {project.latestTodo}
                </div>

            </div>
            
        </div>

    )

}

export default ProjectOverview;