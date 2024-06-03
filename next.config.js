
const { PHASE_DEVELOPMENT_SERVER }=require('next/constants');

module.exports=(phase)=>{

    if(phase===PHASE_DEVELOPMENT_SERVER)
        {
            return {
                env:{
                    mongodb_username: 'gunas4405',
                    mongodb_password: 'Mv4qhof0pmmdB3TN',
                    mongodb_clustername:'cluster0',
                    mongodb_database: 'my-site-on'
                }
            };
        }
        return{
    env: {
        mongodb_username: 'gunas4405',
        mongodb_password: 'Mv4qhof0pmmdB3TN',
        mongodb_clustername:'cluster0',
        mongodb_database: 'my-site'
    }
};
}