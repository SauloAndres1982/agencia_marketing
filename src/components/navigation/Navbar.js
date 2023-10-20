import { connect } from "react-redux"

function Navbar() {
    return(
        <nav className='w-full py-10 shadow-md fixed'>
            <div className="bg-white px-4 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">

                    <div className="ml-4 mt-2">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Job Postings</h3>                        
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <h3 className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Job Postings</h3>
                        <h3 className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Job Postings</h3>
                        <h3 className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Job Postings</h3>
                    <button type="button" className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-gray-200">
                        Create new Job
                    </button>

                    </div>
                </div>
            </div>
            Navbar
        </nav>
    )
}

const mapStateToProps=state=>({

})

export default connect(mapStateToProps, {

}) (Navbar)