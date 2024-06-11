import mob from "./class/mob"
import tp from "./class/tp"

const tpData = [
    { icon: "/icones/Nexus.png", x: -116.35, y: 88.62, z: 16 },
    { icon: "/icones/Nexus.png", x: -85.90, y: 86.11, z: 72 },
    { icon: "/icones/Nexus.png", x: -75.25, y: 90.45, z: 173 },
    { icon: "/icones/Nexus.png", x: -146.60, y: 87.40, z: 11 },
    { icon: "/icones/Nexus.png", x: -198.50, y: 75.97, z: 66 },
    { icon: "/icones/Nexus.png", x: -192.02, y: 122.93, z: 31 },
    { icon: "/icones/Nexus.png", x: -91.70, y: 53.78, z: 156 },
    { icon: "/icones/Petite_Balise.png", x: -115.8, y: 97.1, z: 28 },
    { icon: "/icones/Petite_Balise.png", x: -105, y: 104, z: 15 },
    { icon: "/icones/Petite_Balise.png", x: -103.1, y: 90.6, z: 26 },
    { icon: "/icones/Petite_Balise.png", x: -92.47, y: 93.28, z: 74 },
    { icon: "/icones/Petite_Balise.png", x: -102.28, y: 79.98, z: 65 },
    { icon: "/icones/Petite_Balise.png", x: -105.73, y: 51.34, z: 115 },
    { icon: "/icones/Petite_Balise.png", x: -92.09, y: 72.06, z: 102 },
    { icon: "/icones/Petite_Balise.png", x: -183.80, y: 69.69, z: 76 },
    { icon: "/icones/Petite_Balise.png", x: -40.62, y: 110.23, z: 197 },
    { icon: "/icones/Petite_Balise.png", x: -47.48, y: 95.86, z: 317 },
    { icon: "/icones/Petite_Balise.png", x: -35.03, y: 129.78, z: 8 },
    { icon: "/icones/Petite_Balise.png", x: -23.92, y: 129.28, z: 4 },
    { icon: "/icones/Petite_Balise.png", x: -40.66, y: 143.75, z: 5 },
    { icon: "/icones/Petite_Balise.png", x: -93.22, y: 105.83, z: 69 },
    { icon: "/icones/Petite_Balise.png", x: -61.84, y: 90.16, z: 252 },
    { icon: "/icones/Petite_Balise.png", x: -49.48, y: 85.44, z: 252 },
    { icon: "/icones/Petite_Balise.png", x: -45.75, y: 126.22, z: 7 },
    { icon: "/icones/Petite_Balise.png", x: -113.66, y: 66.58, z: 42 },
    { icon: "/icones/Petite_Balise.png", x: -172.02, y: 82.19, z: 95 },
    { icon: "/icones/Petite_Balise.png", x: -193.69, y: 90.35, z: 82 },
    { icon: "/icones/Petite_Balise.png", x: -186.48, y: 115.38, z: 31 },
    { icon: "/icones/Petite_Balise.png", x: -196.08, y: 132.42, z: 47 },
    { icon: "/icones/Petite_Balise.png", x: -180.06, y: 127.40, z: 76 },
    { icon: "/icones/Petite_Balise.png", x: -192.28, y: 141.94, z: 46 },
    { icon: "/icones/Petite_Balise.png", x: -210.88, y: 146.63, z: 37 },
    { icon: "/icones/Petite_Balise.png", x: -208.94, y: 108.59, z: 33 },
    { icon: "/icones/Petite_Balise.png", x: -145.95, y: 106.22, z: 90 },
    { icon: "/icones/Petite_Balise.png", x: -163.38, y: 105.79, z: 67 },
    { icon: "/icones/Petite_Balise.png", x: -181.20, y: 82.83, z: 170 },
    { icon: "/icones/Petite_Balise.png", x: -164.89, y: 59.77, z: 5 },
    { icon: "/icones/Petite_Balise.png", x: -172.86, y: 64.64, z: 32 },
    { icon: "/icones/Petite_Balise.png", x: -146.77, y: 51.06, z: 22 },
    { icon: "/icones/Petite_Balise.png", x: -133.96, y: 68.17, z: 7 },
    { icon: "/icones/Petite_Balise.png", x: -128.19, y: 77.23, z: 50 },
    { icon: "/icones/Petite_Balise.png", x: -123.58, y: 56.25, z: 116 },
    { icon: "/icones/Petite_Balise.png", x: -103.94, y: 57.23, z: 123 },
    { icon: "/icones/Petite_Balise.png", x: -82.78, y: 102.27, z: 39 },
    { icon: "/icones/Petite_Balise.png", x: -60.16, y: 107.77, z: 233 },
    { icon: "/icones/Petite_Balise.png", x: -172.98, y: 108.61, z: 16 },
    { icon: "/icones/Petite_Balise.png", x: -184.67, y: 101.34, z: 84 },
    { icon: "/icones/Petite_Balise.png", x: -183.34, y: 146.27, z: 81 },
    { icon: "/icones/Petite_Balise.png", x: -195.78, y: 154.97, z: 43 },
    { icon: "/icones/Petite_Balise.png", x: -198.34, y: 118.27, z: 30 },
    { icon: "/icones/Petite_Balise.png", x: -193.34, y: 103.61, z: 201 },
    { icon: "/icones/Petite_Balise.png", x: -208.27, y: 95.48, z: 68 },
    { icon: "/icones/Petite_Balise.png", x: -164.31, y: 96.40, z: 23 },
    { icon: "/icones/Défi.png", x: -111.29, y: 90.11, z: 5 },
    { icon: "/icones/Défi.png", x: -159.56, y: 57.59, z: 5 },
    { icon: "/icones/Défi.png", x: -186.81, y: 62.03, z: 21 },
    { icon: "/icones/Défi.png", x: -172.64, y: 94.22, z: 67 },
    { icon: "/icones/Donjon.png", x: -51.73, y: 91.34, z: 252 },
    { icon: "/icones/Donjon.png", x: -90.98, y: 95.86, z: 38 },
    { icon: "/icones/Le_royaume_fantôme.png", x: -184.36, y: 141.97, z: 22 },
    { icon: "/icones/Tour_éprouvante.png", x: -109.25, y: 128.91, z: 6 },
    { icon: "/icones/Hotel_de_ville.png", x: -127.31, y: 97.84, z: 118 },
    { icon: "/icones/Tortue_clochante.png", x: -106.44, y: 44.84, z: 10 },
    { icon: "/icones/Statue_du_Sans-couronne.png", x: -25.68, y: 154.33, z: 239 },
    { icon: "/icones/Frontière_chaotique_Cendres.png", x: -91.63, y: 86.60, z: 71 },
];

const mobData = [
    { name: "Tambourineur", icon:"/icones/Tambourineur.png", x: -160.92, y: 56.73, z: 1, cost: 3 as cost },
    { name: "Tambourineur", icon:"/icones/Tambourineur.png", x: -161.22, y: 56.12, z: 13, cost: 3 as cost },
    { name: "Tambourineur", icon:"/icones/Tambourineur.png", x: -160.25, y: 54.47, z: 13, cost: 3 as cost },
    { name: "Tambourineur", icon:"/icones/Tambourineur.png", x: -190.53, y: 70.47, z: 43, cost: 3 as cost },
    { name: "Tambourineur", icon:"/icones/Tambourineur.png", x: -192.58, y: 73.64, z: 50, cost: 3 as cost },
    { name: "Tambourineur", icon:"/icones/Tambourineur.png", x: -47.39, y: 113.31, z: 198, cost: 3 as cost },
    { name: "Tambourineur", icon:"/icones/Tambourineur.png", x: -45.125, y: 106.66, z: 237, cost: 3 as cost },
    { name: "Tambourineur", icon:"/icones/Tambourineur.png", x: -31.98, y: 131.59, z: 1, cost: 3 as cost },
    { name: "Tambourineur", icon:"/icones/Tambourineur.png", x: -22.14, y: 136.90, z: 3, cost: 3 as cost },
    { name: "Tambourineur", icon:"/icones/Tambourineur.png", x: -34.45, y: 147.97, z: 2, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -102.77, y: 87.89, z: 31, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -94.77, y: 109.27, z: 24, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -67.17, y: 92.31, z: 189, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -55.86, y: 93.33, z: 216, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -55.19, y: 83.75, z: 313, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -49.20, y: 110.45, z: 182, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -38.53, y: 114.38, z: 28, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -51.25, y: 122.49, z: 1, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -111.61, y: 65.14, z: 42, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -143.98, y: 81.28, z: 19, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -153.54, y: 81.95, z: 19, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -168.98, y: 86.09, z: 72, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -185.88, y: 72.47, z: 78, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -190.06, y: 60.23, z: 1, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -200.59, y: 79.58, z: 51, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -196.59, y: 95.34, z: 46, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -188.48, y: 95.36, z: 74, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -185.83, y: 108.83, z: 1, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -193.29, y: 122.99, z: 5, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -191.17, y: 132.48, z: 47, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -184.19, y: 133.59, z: 10, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -190.10, y: 141.65, z: 41, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -189.20, y: 146.28, z: 41, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -188.67, y: 149.41, z: 41, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -208.63, y: 146.64, z: -10, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -209.14, y: 103.73, z: 7, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -148.45, y: 103.27, z: -12, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -144.56, y: 99.41, z: -27, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -143.34, y: 95.80, z: 45, cost: 3 as cost },
    { name: "Champirose", icon:"/icones/Champirose.png", x: -200.33, y: 98.97, z: 42, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -145.83, y: 102.61, z: 48, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -164.84, y: 107.67, z: 59, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -165.45, y: 104.61, z: 75, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -166.20, y: 100.88, z: 52, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -173.52, y: 92.30, z: 57, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -175.50, y: 89.80, z: 112, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -178.81, y: 84.20, z: 151, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -177.67, y: 72.23, z: 65, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -165.14, y: 65.47, z: 12, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -175.92, y: 55.39, z: 3, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -149.80, y: 52.38, z: 8, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -135.69, y: 71.75, z: 16, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -125.55, y: 77.75, z: 38, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -120.72, y: 63.36, z: 98, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -116.69, y: 64.88, z: 76, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -115.09, y: 61.30, z: 61, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -116.38, y: 58.92, z: 80, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -112.55, y: 63.72, z: 59, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -114.95, y: 50.08, z: 85, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -97.89, y: 55.81, z: 147, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -97.83, y: 81.5, z: 55, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -102.90, y: 85.22, z: 41, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -89.83, y: 95.78, z: 51, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -86.09, y: 100.19, z: 42, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -70.86, y: 87.56, z: 186, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -60.88, y: 101.22, z: 227, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -63.05, y: 106.28, z: 227, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -60.28, y: 112.75, z: 156, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -106.42, y: 133.69, z: 1, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -112.36, y: 134.48, z: 7, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -113.58, y: 129.25, z: 14, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -169.02, y: 114.38, z: 21, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -179.23, y: 107.51, z: 6, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -185.19, y: 102.19, z: 65, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -181.94, y: 99.41, z: 81, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -190.64, y: 113.28, z: 52, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -187.84, y: 123.19, z: 28, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -185, y: 130.95, z: 59, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -182.78, y: 132.08, z: 54, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -184.03, y: 133.80, z: 60, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -182.81, y: 135.19, z: 50, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -185.22, y: 136.52, z: 11, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -189.13, y: 137.38, z: 48, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -187.47, y: 150.73, z: 43, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -194.47, y: 157.48, z: 53, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -208.47, y: 141.63, z: 34, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -201.86, y: 113.33, z: 60, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -198.77, y: 100.20, z: 55, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -214.33, y: 93.73, z: 41, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -202.48, y: 69.48, z: 41, cost: 3 as cost },
    { name: "Loup Havocrinière", icon:"/icones/Loup_Havocrinière.png", x: -163.11, y: 87.55, z: 58, cost: 3 as cost },
];

tpData.map(data => new tp(data.icon, data.x, data.y, data.z));
mobData.map(data => new mob(data.name, data.icon, data.x, data.y, data.z, data.cost));
