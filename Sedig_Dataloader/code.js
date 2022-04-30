//Commented by Alexander Sedig

/****************************************************************
 * Class Declaration
****************************************************************/

//This class defines the values to display in the space program data window. 
class InputData 
{
//The constructor defines what makes up the class, and what goes into each instance created from this class. 
    constructor
    (
        //these are the date types within the table
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ) {
        // use "this" to determine which instance of the variables created in the constructor you are refering to. 
        //the "this" is important so that later on these values can be changed without effecting every other "inputdata" instance as well.
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

/****************************************************************
 * Functions
****************************************************************/

//When "Updatedisplay" is called it will look at the current Data-
// -array index and store those values in a variable called "loadeddata."
//-then returns that value to whatever called the getData() function. 
function getData()
{
    var loadedData = loadData();
    return loadedData;
}

// defines three variables which will be used to distinguish the different elements
// returned so their values can be used later
/**
 * format the row to display data
 * @param {*} legend 
 * @param {*} value 
 * @param {*} units 
 */



//On "Updatedisplay()" each row within the data window will use this datarow() function
//to define and structure its contents.
//the code which relates to the data row is as follows
//                                   "Legend"    "value" "units" 
//["seconds"].innerHTML = dataRow("Time elapsed",  data  [index]
function dataRow(legend, value, units) {
 //the row will create a new cell containing the name of the data type (legend)
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>"; // start a new cell
 //within the second cell in the row it will fill in the value from the data array (value)
    msg += value;
 //adds a space followed by the data array index (units)
    msg += " " + units; // using the array index to define which data table from the array to use.
    msg += "</td>";
    //end of the second cell.
    return msg;

    //return msg makes the command which calls the datarow act as follows
    //["seconds"].innerHTML = msg
    //which would construct
      //  <td>
          //Time elapsed:
      //  </td>
      //   <td>
      //   1200
      //  </td>
}


