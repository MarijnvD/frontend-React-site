import React from 'react';
import './App.css';
import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import story from "./assets/our_story.png";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    content="to the collection"
                    logMessage="to the collection"
                    disabled={false}
                />
                <Button
                    content="shop all bags"
                    logMessage="shop all bags"
                    disabled={false}
                />
                <Button
                    content="pre-orders"
                    logMessage="pre-orders"
                    disabled={true}
                />
            </nav>

            <main>
                <Product
                    img={bag1}
                    title="The handy bag"
                    highLight="Best seller"
                    description="The handy bag"
                    price="€ 400,-"
                />

                <Product
                    img={bag2}
                    title="The stylish bag"
                    highLight="Best seller"
                    description="The stylish bag"
                    price="€ 250,-"
                />

                <Product
                    img={bag3}
                    title="The simple bag"
                    highLight="New collection"
                    description="The simple bag"
                    price="€ 300,-"
                />

                <Product
                    img={bag4}
                    title="The trendy bag"
                    highLight="Best seller"
                    description="The trendy bag"
                    price="€ 150,-"
                />




            </main>

            <footer>
                <Tile
                    header="THE BRAND"
                >
                    <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, architecto dolorum in inventore reprehenderit vitae! Architecto cupiditate facere veritatis. Eum."</p>
                </Tile>

                <Tile
                    img={brand}
                />

                <Tile
                    img={story}
                />

                <Tile
                    header="THE STORY"
                >
                    <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, architecto dolorum in inventore reprehenderit vitae! Architecto cupiditate facere veritatis. Eum."</p>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, architecto dolorum in inventore reprehenderit vitae! Architecto cupiditate facere veritatis. Eum."</p>
                </Tile>



            </footer>
        </>
    );
}

export default App;



