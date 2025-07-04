import { SideBar } from "../components/SideBar";
import { GlobalStyle } from "../styles/global";
import RectangleRegion from "@/components/Boxes/RectangleRegion";
import StockList from "../components/StockChart/StockList";

function Mainpage() {
    return (
        <>
            <GlobalStyle />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "100vh",
                    width: "100%",
                    overflow: "hidden",
                }}
            >
                {/* Sidebar */}
                <div style={{ width: "70px", flexShrink: 0 }}>
                    <SideBar />
                </div>

                {/* Right content area with 4 rectangles */}
                <div
                    style={{
                        flexGrow: 1,
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gridTemplateRows: "repeat(2, 1fr)",
                        gap: "16px",
                        padding: "16px",
                        boxSizing: "border-box",
                    }}
                >
                    <RectangleRegion>
                        <StockList />
                    </RectangleRegion>
                    <RectangleRegion>
                        <StockList />
                    </RectangleRegion>
                    <RectangleRegion>
                        <StockList />
                    </RectangleRegion>
                    <RectangleRegion>
                        <StockList />
                    </RectangleRegion>
                </div>
            </div>
        </>
    );
}

export default Mainpage;
