import React from "react";
import Hero from "../components/Hero";
import MenuImage from "../assets/images/menu.jpg";

const MenuPage = () => {
  const menu = {
    Appetizers: [
      {
        name: "Charred Edamame",
        description: "Miso butter, sea salt",
        price: "$9",
      },
      {
        name: "Lab Fries",
        description: "Truffle oil, parmesan, aioli",
        price: "$11",
      },
      {
        name: "Tuna Tartare",
        description: "Avocado, soy pearls, wonton crisps",
        price: "$14",
      },
    ],
    Mains: [
      {
        name: "Sous-Vide Fried Chicken",
        description: "Hot honey glaze, sweet slaw",
        price: "$24",
      },
      {
        name: "Ramen Carbonara",
        description: "Smoked pancetta, egg yolk cream",
        price: "$22",
      },
      {
        name: "Impossible Bibimbap",
        description: "Plant-based, gochujang rice bowl",
        price: "$20",
      },
    ],
    Desserts: [
      {
        name: "Matcha Lava Cake",
        description: "With white chocolate core",
        price: "$10",
      },
      {
        name: "Nitro Ice Cream",
        description: "Vanilla bean flash-frozen at your table",
        price: "$12",
      },
      {
        name: "Ube Cheesecake",
        description: "Purple yam, coconut crumble",
        price: "$11",
      },
    ],
  };

  return (
    <div className="h-screen w-screen">
      <Hero src={MenuImage}>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
          ᗰEᑎᑌ
        </h1>
      </Hero>

      <section className="bg-white text-gray-800 px-6 py-16 sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto space-y-16">
          {Object.entries(menu).map(([section, items]) => (
            <div key={section}>
              <h2 className="text-3xl font-bold text-red-500 mb-6">
                {section}
              </h2>
              <table className="w-full text-left border-separate border-spacing-y-4">
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="font-semibold pr-4">
                        {item.name}{" "}
                        <span className="text-gray-600">
                          - ({item.description})
                        </span>
                      </td>
                      <td className="text-right font-medium text-gray-800">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
