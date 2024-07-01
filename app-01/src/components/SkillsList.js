export function SkillsList({skills}){
    return (
       <ul>
            {skills.map((skill)=><dt>{skill}</dt>)}
       </ul>
    ); 
}