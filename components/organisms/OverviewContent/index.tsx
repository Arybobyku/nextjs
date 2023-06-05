import Category from "./Category"
import TableRow from "./TableRow"

export default function OverviewContent() {
    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
                <div className="top-up-categories mb-30">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
                    <div className="main-content">
                        <div className="row">
                            <Category icon="ic-desktop" nominal={1850000}>
                                Game <br /> Desktop
                            </Category>
                            <Category icon="ic-mobile" nominal={845000000}>
                                Game <br /> Mobile
                            </Category>
                            <Category icon="ic-desktop" nominal={5000000}>
                                Others <br /> Category
                            </Category>
                        </div>
                    </div>
                </div>
                <div className="latest-transaction">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
                    <div className="main-content main-content-table overflow-auto">
                        <table className="table table-borderless">
                            <thead>
                                <tr className="color-palette-1">
                                    <th className="text-start" scope="col">Game</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableRow title="Mobile Legend" item={200} price={5000000} category="Desktop" image="overview-1" status="Pending" />
                                <TableRow title="Mobile Legend" item={200} price={5000000} category="Desktop" image="overview-1" status="Pending" />
                                <TableRow title="Mobile Legend" item={200} price={5000000} category="Desktop" image="overview-1" status="Pending" />
                                <TableRow title="Mobile Legend" item={200} price={5000000} category="Desktop" image="overview-1" status="Pending" />
                                <TableRow title="Mobile Legend" item={200} price={5000000} category="Desktop" image="overview-1" status="Pending" />
                                <TableRow title="Mobile Legend" item={200} price={5000000} category="Desktop" image="overview-1" status="Pending" />

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}
