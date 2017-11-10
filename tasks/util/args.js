import yargs from 'yargs'

const args = yargs

    .option('production',{
        boolean:true,
        default:false,
        describe:'min all scripts'
    })
    .option('watch',{
        boolean:true,
        default:false,
        describe:'wathc all file'
    })
    .option('verbose',{
        boolean:true,
        default:false,
        describe:'log'
    })

    .option('sourcemaps',{
        describe:'force the creation of sourcemaps'
    })

    .option('port',{
        string:true,
        default:8080
    })
    .argv

export default args