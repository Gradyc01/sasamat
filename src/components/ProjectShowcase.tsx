import React from 'react';

interface Props {
  title: string;
  srcLink?: string;
  texts: string[];
  githubLink?: string;
  leftSideVid?: boolean
}

const ProjectShowcase: React.FC<Props> = ({ title , srcLink, texts, leftSideVid, githubLink }) => {
  return (
        <div className="flex flex-row ">
            {leftSideVid && (<div className="flex flex-row w-1/2 items-center m-1">
                {srcLink && (
                    <iframe
                        className="w-full aspect-video"
                        src={srcLink}
                        allow="autoplay"
                    />
                )}
            </div>)}
            <div className="flex flex-col w-1/2 items-end gap-2">
                <div className="flex flex-row gap-2 w-full font-regola">
                    <span className="text-4xl">
                        { title }
                    </span>
                    {(githubLink && <a href={githubLink} className="translate-y-[5px]">
                        {/* <Github 
                            color="#99a1af" 
                            size={30}
                        /> */}
                        <img width="30" height="30" src="https://cdn.simpleicons.org/github/99a1af" />
                    </a>)}
                </div>
                
                <div className="flex flex-col w-[97%] font-regola text-lg gap-2">
                    {texts.map((text, index) => (
                        <span key={index}>
                            {text}
                        </span>
                    ))}
                </div>
            </div>
            {!leftSideVid && (<div className="flex flex-row w-1/2 items-center m-1">
                {srcLink && (
                    <iframe
                        className="w-full aspect-video"
                        src={srcLink}
                        allow="autoplay"
                    />
                )}
            </div>)}
        </div>     
  );
};

export default ProjectShowcase;