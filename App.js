import React from 'react';
import { createStackNavigator, withNavigation, createDrawerNavigator} from 'react-navigation'; // Version can be specified in package.json
//Health screens
import CheckupHistory from './components/Health/CheckupHistory';
import CheckupDetails from './components/Health/CheckupDetails';
import RecordObservation from './components/Health/RecordObservation';
import RecordObservationNext from './components/Health/RecordObservationNext';
import ObservationSummary from './components/Health/ObservationSummary';
import RecordVaccination from './components/Health/RecordVaccination';
import VaccinationDetails from './components/Health/VaccinationDetails';
import RecordDehorning from './components/Health/RecordDehorning';
import DehorningDetails from './components/Health/DehorningDetails';
import DeworningDetails from './components/Health/DeworningDetails';
import DeworningProfile from './components/Health/DeworningProfile';
//Login screens
import Routes from "./components/Login/LoginStack";
//registration screens
import Registercattle from  './components/registration/registercattle/Registercattle';
import Registersire from    './components/registration/registersire/Registersire';
import Cattlesummary from   './components/registration/cattlesummary/Cattlesummary';
import Activitylog from    './components/registration/activitylog/Activitylog';
import BreedInformation1 from    './components/registration/registercattle/BreedInformation1' ; 
import BreedInformation2 from    './components/registration/registercattle/BreedInformation2';
import BreedInformation3 from    './components/registration/registercattle/BreedInformation3';
import BreedInformation4 from    './components/registration/registercattle/BreedInformation4';
//breed screens
import RecordAI from './components/breed/RecordAI';
import AISummary from './components/breed/AISummary';
import RecordPD from './components/breed/RecordPD';
import PDSummary from './components/breed/PDSummary';
import BodyConditionScore from './components/breed/BodyConditionScore';
import BodyWeightManagement from './components/breed/BodyWeightManagement';
import RecordPdSaveButton from './components/breed/buttons/RecoredPdSaveButton';
import NextPDCheck from './components/breed/buttons/NextPDCheck';
import SaveandPerformAi from './components/breed/buttons/SaveandPerformButton/SaveandPerform';
import AIServicesSaveButton from './components/breed/buttons/SaveandPerformButton/AIServicesSaveButton';
import HowToEvaluateBCSIndex from './components/breed/buttons/HowToEvaluateBCSIndex';
import HowToEvaluateBCSNext from './components/breed/buttons/HowToEvaluateBCSNext';
import HowToEvaluateBCSNext1 from './components/breed/buttons/HowToEvaluateBCSNext1';
//Nutrition screens
import Milk from './components/nutrition/Milk';
import Inventory from './components/nutrition/Inventory';
import Fp from './components/nutrition/Fp';


const RegistrationStack = createStackNavigator(
  {
    Registercattle:{ screen : Registercattle,
      navigationOptions: ({navigation}) => ({
        title: 'Cattle Registration',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#212121'},
      })
    },

    Activitylog:{screen :  Activitylog,
      navigationOptions: ({navigation}) => ({
        title: 'Activity Log',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#212121'},
      })
    },

    Cattlesummary: {screen : Cattlesummary,
      navigationOptions: ({navigation}) => ({
        title: 'Cattle Summary',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#212121'},
      })
    },

    Registersire: {screen : Registersire,
      navigationOptions: ({navigation}) => ({
        title: 'Register Sire',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#212121'},
      })
    },

    //
    BreedInformation1: {screen : BreedInformation1,
      navigationOptions: ({navigation}) => ({
        title: 'Cattle Registration',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#212121'},
      })
    },

    BreedInformation2: {screen : BreedInformation2,
      navigationOptions: ({navigation}) => ({
        title: 'Cattle Registration',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#212121'},
      })
    },

    BreedInformation3: {screen : BreedInformation3,
      navigationOptions: ({navigation}) => ({
        title: 'Cattle Registration',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#212121'},
      })
    },

    BreedInformation4: {screen : BreedInformation4,
      navigationOptions: ({navigation}) => ({
        title: 'Cattle Details',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#212121'},
      })
    },

  }
);

const HealthStack = createStackNavigator(
  {
    CheckupHistory: CheckupHistory,
    CheckupDetails: CheckupDetails,
    RecordObservation: RecordObservation,
    RecordObservationNext: RecordObservationNext,
    ObservationSummary: ObservationSummary,
    RecordVaccination: RecordVaccination,
    VaccinationDetails: VaccinationDetails,
    RecordDehorning: RecordDehorning,
    DehorningDetails: DehorningDetails,
    DeworningDetails: DeworningDetails,
    DeworningProfile: DeworningProfile,
  },
  {
    navigationOptions: {
      title: "Welcome",
      headerStyle: {
        backgroundColor: "black"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        flex:1,
        fontWeight: "bold",
      }
    }
  }
)

const BreedStack = createStackNavigator(
  {
    Home1: RecordAI,
    Home2: AISummary,
    Home3: RecordPD,
    Home4: PDSummary,
    Home7: RecordPdSaveButton,
    BodyCondition: BodyConditionScore,
    BodyWeight: BodyWeightManagement,
    NextPD: NextPDCheck,
    SaveandPerform: SaveandPerformAi,
    AIServices: AIServicesSaveButton,
    HowToEvaluate: HowToEvaluateBCSIndex,
    EvaluateBCSNext: HowToEvaluateBCSNext,
    EvaluateBCSNext1: HowToEvaluateBCSNext1,
  },
  {
    navigationOptions: {
      title: "Welcome",
      headerStyle: {
        backgroundColor: "black"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center"
      }
    }
  }
);

const NutritionStack = createStackNavigator(
  {
    Milk: {
      screen: Milk,
    },
    Inventory: {
      screen: Inventory,
    },
    Fp: {
      screen: Fp,
    },
  },
 
  {
    navigationOptions: {
      title: ('Welcome'),
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
      },
      headerStyle: {
        backgroundColor: 'black',
      },
    }
  }
);

const RootStack = createStackNavigator(
  {
    LoginRoutes: Routes,
    HealthStack: HealthStack,
    RegistrationStack: RegistrationStack,
    BreedStack: BreedStack,
    NutritionStack: NutritionStack
},
{
  initialRouteName: "LoginRoutes",
  navigationOptions: { header:null}
}
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // this.createStackNavigator = this.createStackNavigator.bind(this);
    // this.withNavigation = this.withNavigation.bind(this);
  }

  render() {
    return <RootStack />;
  }
}
