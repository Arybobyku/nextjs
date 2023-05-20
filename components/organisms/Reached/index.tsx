import DividerY from "../../atoms/DividerY"
import ReachedItem from "../../molecules/ReachedItem"

export default function Reached() {
    return (

        <section className="reached pt-50 pb-50">
            <div className="container-fluid">
                <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
                    <ReachedItem title="290M+" category="Player Top Up"/>
                    <DividerY />
                    <ReachedItem title="12.500+" category="Game Available"/>
                    <DividerY />
                    <ReachedItem title="99.9%" category="Happy Players"/>
                    <DividerY />
                    <ReachedItem title="4.7" category="Rating Worldwide"/>
                </div>
            </div>
        </section>
    )
}
