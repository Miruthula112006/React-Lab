export default function Table(){
    return(
    <div className='h-[500px] w-[700px] bg-linear-to-tr from-emerald-300 to-emerald-600'>
        <h1>Table #09</h1>
        <table>
            <header>
                <tr>
                    <th>invoice</th>
                    <th>customer</th>
                    <th>ship</th>
                    <th>price</th>
                    <th>purchased price</th>
                    <th>status</th>
                </tr>
            </header>
        </table>
        </div>
    )
}