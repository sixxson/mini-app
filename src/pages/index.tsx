import { openMiniApp } from "zmp-sdk";
import { Box, Button, Icon, Page, Text } from "zmp-ui";

import Clock from "@/components/clock";
import Logo from "@/components/logo";
import bg from "@/static/bg.svg";
import ImageCustoms from "@/components/customUI/ImageCustoms";
import Banner from "@/components/Banner/banner";

function HomePage() {
  return (
    <Page
      className="flex flex-col items-center justify-center space-y-6 bg-cover bg-center bg-no-repeat bg-white dark:bg-black"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <Box>
        <div className="prose">
          <img src="../../assets/img/1.jpg" alt="Welcome" />
          <Text.Title className="heading-2 font-bold text-center">
            Welcome to ZMP
          </Text.Title>
          <p>
            adjalksdjalkdConsequat Lorem cillum incididunt culpa exercitation
            aliqua do laboris do sit. Veniam reprehenderit quis irure fugiat
            minim qui. Esse laboris sint fugiat id. Enim cupidatat velit
            incididunt laboris labore non excepteur eu. Tempor proident ut
            ullamco consequat. Eiusmod irure eu duis eiusmod sit est sit laborum
            veniam minim. Qui aute exercitation ad sint esse amet laboris aute.
            Velit dolore velit fugiat adipisicing excepteur magna. Quis pariatur
            ipsum occaecat ipsum. Voluptate aliquip nostrud aute pariatur
            pariatur Lorem veniam nostrud aliquip elit reprehenderit. Amet
            fugiat do do cillum laborum enim aliquip adipisicing. Officia
            exercitation et irure cillum labore laborum ea velit velit quis
            mollit cillum minim occaecat.
          </p>
        </div>
      </Box>
    </Page>
  );
}

export default HomePage;
