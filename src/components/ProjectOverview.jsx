import React, { useState } from 'react';
import Router from "next/router";
import {ProjectIcons} from '@/components/projectIcons/ProjectIcons'
import { theme_colors, done_colors } from '@/util/colors'; // theme_colorをJSファイルから利用する

export const ProjectOverview = (props) => {

    const {project, onCheck} = props;

    const handleChange = () => {
        onCheck(project);
    }

    return (
        // <div className="flex items-center ps-3">
        //     <label className="flex items-center space-x-4 rtl:space-x-reverse">
        //         <input type="checkbox" value="" checked={project.done} onChange={handleChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
        //     </label>
                                    
        //     <div onClick={() => Router.push("/projects/[id]", `/projects/${project.id}`)} className="flex items-center space-x-4">
        //         <div className="flex-shrink-0">
        //             <ProjectIcons className="h-16 w-16 fill-gray-500" type={project.icon}/>
        //         </div>
        //         <div className="flex-shrink-0">
        //             <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
        //                 {project.name}
        //             </p>
        //         </div>

        //         <div className="flex-shrink-1  min-w-0 items-center text-base font-normal text-gray-900 dark:text-white">
        //             Latest Todo : {project.latestTasks}
        //         </div>

        //     </div>
            
        // </div>

            <div onClick={() => Router.push("/projects/[id]", `/projects/${project.id}`)} className={`grow flex flex-col items-center min-w-52 max-w-96 h-52 rounded-lg bg-white border border-white transition-shadow duration-300 hover:shadow-2xl m-1`}>
                <ProjectIcons className={`h-20 w-20 flex-grow-2 `} style={{fill: theme_colors[project.colorid]}} type={project.icon}/>
                <p className=" grow text-lg font-medium text-main-dark-color truncate">
                    {project.name} 
                </p>

            </div>
        

    )

}

export default ProjectOverview;