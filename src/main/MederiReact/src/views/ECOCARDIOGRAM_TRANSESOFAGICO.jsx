import React from "react";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

class ECOCARDIOGRAM_TRASNSESOFAGICO extends React.Component {



  constructor(){

    super();

    this.state={
      SuperficieCorporal : 0 ,
      Peso :  '',
      Talla : '',
      RitmoCar:'Sinusal',
      Fa:'Extrasistoles ventriculares',
      FrecuenciaCar : '',
      SpInterauricular :'Normal',
      SeptumAuricularAn : 'Cia',
      ProtesisAortica : 'No',
      ProtesisMitral : 'No',
      ProtesisTricuspide : 'No',
      AuriculaIzquierda : 'Normal',
      AuriculaDerecha : 'Normal',
      ValviaTricuspide : 'Bivalvia',
      ValvulaTricuspideAnormal : 'Normal',
      ValvulaTricuspideIE : 'Insuficiencia',
      OtrosValvulaTricuspideI : 'Leve',
      OtrosValvulaTricuspideE : 'Leve',
      EfuncionDiastolica : 'Normal',
      VDisfuncion : 'Disfunción tipo I'
      
    }

    this.Pesoevent = this.Pesoevent.bind(this);
    this.TallaEvent = this.TallaEvent.bind(this);
    this.RitmoCardiaco = this.RitmoCardiaco.bind(this);
    this.FaChange = this.FaChange.bind(this);
    this.FrecuenciaCardiaca = this.FrecuenciaCardiaca.bind(this);
    this.SpInterauricular = this.SpInterauricular.bind(this);
    this.SeptumAuricularAn = this.SeptumAuricularAn.bind(this);
    this.ProtesisMitral = this.ProtesisMitral.bind(this);
    this.ProtesisTricuspide = this.ProtesisTricuspide.bind(this);
    this.ProtesisAortica = this.ProtesisAortica.bind(this);
    this.AuriculaIzquierda = this.AuriculaIzquierda.bind(this);
    this.AuriculaDerecha = this.AuriculaDerecha.bind(this);
    this.ValviaTricuspide = this.ValviaTricuspide.bind(this);
    this.ValvulaTricuspideAnormal = this.ValvulaTricuspideAnormal.bind(this);
    this.OtrosValvulaTricuspideI = this.OtrosValvulaTricuspideI.bind(this);
    this.OtrosValvulaTricuspideE = this.OtrosValvulaTricuspideE.bind(this);
    this.ValvulaTricuspideIE = this.ValvulaTricuspideIE.bind(this);
    this.EfuncionDiastolica = this.EfuncionDiastolica.bind(this);
    this.VDisfuncion = this.VDisfuncion.bind(this);
  
  }

  VDisfuncion(event){
    this.setState({
      VDisfuncion : event.target.value,
    });
  }

  EfuncionDiastolica(event){
    this.setState({
      EfuncionDiastolica : event.target.value,
    })
  }

  OtrosValvulaTricuspideE(event){
    this.setState({
      OtrosValvulaTricuspideE : event.target.value,
    });
  }

  OtrosValvulaTricuspideI(event){
    this.setState({
      OtrosValvulaTricuspideI : event.target.value,
    });
  }

  ValvulaTricuspideIE(event) {
    this.setState({
      ValvulaTricuspideIE: event.target.value,
      OtrosValvulaTricuspideI: 'Leve',
      OtrosValvulaTricuspideE: 'Leve'
    })
  }

  ValvulaTricuspideAnormal(event){
    this.setState({
      ValvulaTricuspideAnormal : event.target.value,
    });
  }

  ValviaTricuspide(event){
    this.setState({
      ValviaTricuspide : event.target.value,
    })
  }

  AuriculaDerecha(event){
    this.setState({
      AuriculaDerecha : event.target.value,
    });
  }

  AuriculaIzquierda(event){
    this.setState({
      AuriculaIzquierda : event.target.value,
    });
  }

  ProtesisAortica(event){
    this.setState({
      ProtesisAortica : event.target.value,
    });
  }

  ProtesisTricuspide(event){
    this.setState({
      ProtesisTricuspide : event.target.value,
    });
  }

  ProtesisMitral(event){
    this.setState({
      ProtesisMitral : event.target.value,
    });
  }
  
  FaChange(event){
    this.setState({
    Fa:event.target.value,
    });
  }

  Pesoevent(event){
    this.setState({ 
      Peso : Number(event.target.value),
  
    });
  }

  TallaEvent(event){
    this.setState({ 
      Talla : Number(event.target.value),
    });
  }

  RitmoCardiaco(event){
    this.setState({
     RitmoCar : event.target.value,
    });
  }
  FrecuenciaCardiaca(event){
    this.setState({
      FrecuenciaCar : event.target.value,
    });
  }

  SpInterauricular(event){
    this.setState({
      SpInterauricular : event.target.value,
    });
  }

  SeptumAuricularAn(event){
    this.setState({
      SeptumAuricularAn : event.target.value,
    });
  }

  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">

        <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">ECOCARDIOGRAMA TRANSESOFAGICO</h5>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="3">
                      <label>EQUIPO UTILIZADO: </label>
                      <select>
                        <option>Epiq</option>
                        <option>Affiniti 70</option>
                        <option>Affiniti 50</option>
                      </select>
                    </Col>
                    <Col md="3">
                      <label>CALIDAD VENTANA: </label>
                      <select>
                        <option>Buena</option>
                        <option>Regular</option>
                        <option>Mala</option>
                      </select>
                    </Col>
                    <Col md="3">
                      <label>AREA DE REALIZACIÓN: </label>
                      <select>
                        <option>Laboratorio</option>
                        <option>Uci</option>
                        <option>Salas de Cx</option>
                        <option>Hemodinamia</option>
                      </select>
                    </Col>
                    <Col md="3">
                      <label>TRANSDUCTOR: </label>
                      <select>
                        <option>X5-1</option>
                        <option>X5-2</option>
                        <option>X5-3</option>
                      </select>
                    </Col>
                  </Row>

                  <Row>

                    <Col md="12">
                      <table>
                        <tr>
                          <td>
                          <label>FRECUENCIA CARDIACA: </label>
                          </td>
                          <td>
                          <Input  placeholder="Frecuencia cardiaca" type="text" onChange={this.FrecuenciaCardiaca} value={this.state.FrecuenciaCar}/>                     
                          </td>
                          <td>
                          <h2>{this.state.FrecuenciaCar + " Lpm"}</h2>
                          </td>
                          <td>
                          <label>RITMO CARDIACO: </label>
                          </td>
                          <td>

                          <select value={this.state.RitmoCar} onChange={this.RitmoCardiaco}>
                        <option>Sinusal</option>
                        <option>Marcapaso</option>
                        <option>Arritmico</option>
                        <option>Otros</option>
                      </select>

                          </td>
                          

                    {this.state.RitmoCar == "Arritmico" ?

<td>

  <select>
    <option>Fibrilación auricular</option>
    <option>Extrasistoles ventriculares</option>
    <option>Extrasistoles supra ventriculares</option>
  </select>
</td>

: null } 

{ this.state.RitmoCar == "Otros" ?
  <td>
    <label>Otros:</label>
    <Input placeholder="Otros" type="text"/>
  </td>
  : null}

                        </tr>
                      </table>
                    
                   </Col>




                  </Row>
              

                </CardBody>
              </Card>
            </Col>


          </Row>
          <Row>
            <Col md="12">
              <Card>
          
                <CardHeader>
                  <h5 className="title">Información del paciente</h5>
                </CardHeader>

                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Nombre:</label>
                          <Input
                            placeholder="Nombre"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Identificación</label>
                          <Input
                            placeholder="Identificación"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Cama
                          </label>
                          <Input placeholder="Cama" type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>


<Col md="3">
    <FormGroup>
      <label>Peso (Kg): </label>
      <Input
        placeholder="Peso (Kg)"
        type="number"
        value={this.state.Peso}
        onChange={this.Pesoevent}
   />

    </FormGroup>
  </Col>

  <Col md="3">
    <FormGroup>
      <label>Talla: </label>

      
      <Input
        placeholder="Talla"
        type="number"
        value={this.state.Talla}
        onChange={this.TallaEvent}
      />

    </FormGroup>
  </Col>


  <Col md="6">
    <FormGroup>
      <label>Superficie corporal: </label>
      <h2>{ (0.007184 * Math.pow(this.state.Peso,0.425)*Math.pow(this.state.Talla,0.725)).toFixed(2)}</h2>
      

    </FormGroup>
  </Col>


</Row>



                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Fecha de realización</label>
                          <Input
                            placeholder="Fecha de realización"
                            type="text"
                          />
                        </FormGroup>
                      
                      </Col>



                      <Col className="pl-1" md="3">
                        <FormGroup>
                          <label>Tensión arterial</label>
                          <Input
                            placeholder="Tensión arterial"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>



                      <Col md="6">
                        <FormGroup>
                          <label>Fecha de nacimiento</label>
                          <Input placeholder="Fecha de nacimiento" type="date"/>
                        </FormGroup>
                      </Col>

                      <Col md="6">
                        <FormGroup>
                          <label>Genero: </label>
                          <select>
                            <option>Masculino</option>
                            <option>Femenino</option>
                          </select>

                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="3">
                        <FormGroup>
                          <label>Comprobador</label>
                          <Input
                            placeholder="Comprobador"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="3">
                        <FormGroup>
                          <label>Indicación</label>
                          <Input placeholder="Indicación" type="text" />

                        </FormGroup>
                      </Col>


                      <Col className="pr-1" md="3">
                        <FormGroup>
                          <label>Frecuencia cardiaca</label>
                          <Input
                            placeholder="Frecuencia cardiaca"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Saturación</label>
                          <Input
                            placeholder="Saturación"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>


                    <Row>
                    <Col md="3">
                      <label>EQUIPO UTILIZADO: </label>
                      <select>
                        <option>Epiq</option>
                        <option>Affiniti 70</option>
                        <option>Affiniti 50</option>
                      </select>
                    </Col>
                    <Col md="3">
                      <label>CALIDAD VENTANA: </label>
                      <select>
                        <option>Buena</option>
                        <option>Regular</option>
                        <option>Mala</option>
                      </select>
                    </Col>
                    <Col md="3">
                      <label>AREA DE REALIZACIÓN: </label>
                      <select>
                        <option>Laboratorio</option>
                        <option>Uci</option>
                        <option>Salas de Cx</option>
                        <option>Hemodinamia</option>
                      </select>
                    </Col>
                    <Col md="3">
                      <label>TRANSDUCTOR: </label>
                      <select>
                        <option>X5-1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </Col>
                  </Row>

                  <Row>

                    <Col md="3">
                      <label>RITMO CARDIACO: </label>
                      <select value={this.state.RitmoCar} onChange={this.RitmoCardiaco}>
                        <option>Sinusal</option>
                        <option>Marcapaso</option>
                        <option>Arritmico</option>
                        <option>FA</option>
                      </select>

                    </Col>


                    {this.state.RitmoCar == "FA" ?

                      <Col md="3">

                        <select value={this.state.Fa} onChange={this.FaChange} >
                          <option>Extrasistoles ventriculares</option>
                          <option>Extrasistoles supra ventriculares</option>
                          <option>Otros</option>
                        </select>
                      </Col>

                      : null }
                      
                      {this.state.Fa == "Otros" ?
                       <Col md="3">
                        <div>
                          <label>Otros: </label>
                          <Input placeholder="Otros" type="text"/>
                        </div>
                        </Col>
                        : null}

                  </Row>

                  <Row>
                    <Col md="3">
                    <label>Auricula izquierda:</label>
                        <select value={this.state.AuriculaIzquierda} onChange={this.AuriculaIzquierda}>
                          <option>Normal</option>
                          <option>Anormal</option>
                        </select>
                    </Col>


                    <Col md="3">
                    <label>Area:</label>
                    <Input placeholder="Area" type="text"/>
                    </Col>

                    <Col md="3">
                    <label>Volumen indexado:</label>
                    <Input placeholder="Volumen indexado" type="text"/>
                    </Col>


                    <Col md="3">
                    <label>Velocidades doppler (Cm/s):</label>
                    <Input placeholder="Velocidades doppler (Cm/s)" type="text"/>
                    </Col>
                  </Row>


                  <Row>
                    <Col md="3">
                    <label>Auricula derecha:</label>
                        <select value={this.state.AuriculaDerecha} onChange={this.AuriculaDerecha}>
                          <option>Normal</option>
                          <option>Anormal</option>
                        </select>
                    </Col>


                    <Col md="3">
                    <label>Area:</label>
                    <Input placeholder="Area" type="text"/>
                    </Col>

                    <Col md="3">
                    <label>Volumen indexado:</label>
                    <Input placeholder="Volumen indexado" type="text"/>
                    </Col>


                    <Col md="3">
                    <label>Velocidades doppler (Cm/s):</label>
                    <Input placeholder="Velocidades doppler (Cm/s)" type="text"/>
                    </Col>
                  </Row>              
                  <Row>
                    <Col md="12">
                    <table>
                    <tr>
                    <td><label>Septum interauricular</label></td>
                    <td>
                    <select value={this.state.SpInterauricular} onChange={this.SpInterauricular}>
                          <option>Normal</option>
                          <option>Anormal</option>
                    </select>
                    </td>
                    {
                      this.state.SpInterauricular == "Normal" ?
                    <td>
                    <Input placeholder="Normal" type="text"/>
                    </td>
                    :null
                    } 
                    {
                     this.state.SpInterauricular == "Anormal" ?
                    <td>
                    <select value={this.state.SeptumAuricularAn} onChange={this.SeptumAuricularAn}>
                      <option>Cia</option>
                      <option>Foramen oval</option>
                      <option>Otro</option>
                    </select>
                    </td> :null
                    }
                    {
                      this.state.SeptumAuricularAn == "Otro" && this.state.SpInterauricular == "Anormal" ?
                      <td><Input placeholder="Otro" type="text"/></td>        
                      :null
                    } </tr></table></Col>
                  </Row>
                  <Row>
                    <Col md="3">
                      <h5 className="title">VÁLVULAS</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <table>
                        <tr>
                          <td>
                            <label>AÓRTICA</label>
                          </td>
                          <td>
                            <Input placeholder="V maxima" type="text" />
                          </td>
                          <td>
                            <Input placeholder="Gradiente pico" type="text" />
                          </td>
                          <td>
                            <Input placeholder="Gradiente medio" type="text" />
                          </td>
                        </tr>
                      </table>
                    </Col>
                    <Col md="8">
                      <table>
                        <tr>
                          <td>
                            <label>Protesis:</label>
                          </td>
                          <td>
                          <select value={this.state.ProtesisAortica} onChange={this.ProtesisAortica}>
                              <option>Si</option>
                              <option>No</option>
                            </select>  
                          </td>
                          {this.state.ProtesisAortica == "Si" ?
                          <td>
                            <select>
                              <option>Mecanica</option>
                              <option>Biologica</option>
                            </select>
                            </td>

                          : null

                          }
                          <td>
                            <label>Plastia:</label>
                          </td>
                          <td>
                            <select>
                              <option>Si</option>
                              <option>No</option>
                            </select>
                          </td>
                          <td>
                            <label>Endocarditis:</label>
                          </td>
                          <td>
                            <select>
                              <option>Si</option>
                              <option>No</option>
                            </select>
                          </td>
                          <td>
                            <select value={this.state.ValvulaAorticaAnormal} onChange={this.ValvulaAorticaAnormal}>
                              <option>Normal</option>
                              <option>Anormal</option>
                            </select>
                          </td>
                          {
                            this.state.ValvulaAorticaAnormal == "Anormal" ?

                              <td>
                                <select value={this.state.ValvulaAorticaIE} onChange={this.ValvulaAorticaIE}>
                                  <option>Insuficiencia</option>
                                  <option>Estenosis</option>
                                </select>
                              </td>

                              : null
                          }
                          {
                            this.state.ValvulaAorticaIE == "Insuficiencia" && this.state.ValvulaAorticaAnormal == "Anormal" ?
                              <td>
                                <select value={this.state.OtrosValvulaAorticaI} onChange={this.OtrosValvulaAorticaI}>
                                  <option>Leve</option>
                                  <option>Leve a moderada</option>
                                  <option>Moderada</option>
                                  <option>Moderada a severa</option>
                                  <option>Severa</option>
                                  <option>Otros</option>
                                </select>
                              </td>
                              : this.state.ValvulaAorticaIE == "Estenosis" && this.state.ValvulaAorticaAnormal == "Anormal" ?
                                <td>
                                  <select value={this.state.OtrosValvulaAorticaE} onChange={this.OtrosValvulaAorticaE}>
                                    <option>Leve</option>
                                    <option>Leve a moderada</option>
                                    <option>Moderada</option>
                                    <option>Moderada a severa</option>
                                    <option>Severa</option>
                                    <option>Otros</option>
                                  </select>
                                </td>
                                : null
                          }
                          {
                            (this.state.OtrosValvulaAorticaI == "Otros" || this.state.OtrosValvulaAorticaE == "Otros") && this.state.ValvulaAorticaAnormal == "Anormal" ?
                              <td>
                                <Input placeholder="Otros" type="text" />
                              </td>
                              : null
                          }
           
                        </tr>
                      </table>

                    </Col>

                  </Row>
                  <Row>

                  <Col md="12">
                    <table>
                      <tr>
                  <td>THP:</td>
                          <td><Input placeholder="THP" type="text" /></td>
                        
                        </tr>
                      </table>

                    </Col>

                  </Row>

                  <Row>
                    <Col md="4">
                      <table>
                        <tr>
                          <td>
                            <label>MITRAL:</label>
                          </td>
                          <td>
                            <Input placeholder="V maxima" type="text" />
                          </td>
                          <td>
                            <Input placeholder="Gradiente pico" type="text" />
                          </td>
                          <td>
                            <Input placeholder="Gradiente medio" type="text" />
                          </td>
                        </tr>
                      </table>
                    </Col>
                    <Col md="8">
                      <table>
                        <tr>
                        <td>
                            <label>Protesis:</label>
                          </td>
                          <td>
                          <select value={this.state.ProtesisMitral} onChange={this.ProtesisMitral}>
                              <option>Si</option>
                              <option>No</option>
                            </select>  
                          </td>
                          {this.state.ProtesisMitral == "Si" ?
                          <td>
                            <select>
                              <option>Mecanica</option>
                              <option>Biologica</option>
                            </select>
                            </td>

                          : null

                          }
                          <td>
                            <select value={this.state.ValvulaMitralAnormal} onChange={this.ValvulaMitralAnormal}>
                              <option>Normal</option>
                              <option>Anormal</option>
                            </select>
                          </td>
                          
                          {
                            this.state.ValvulaMitralAnormal == "Anormal" ?

                              <td>
                                <select value={this.state.ValvulaMitralIE} onChange={this.ValvulaMitralIE}>
                                  <option>Insuficiencia</option>
                                  <option>Estenosis</option>
                                </select>
                              </td>

                              : null
                          }
                          {
                            this.state.ValvulaMitralIE == "Insuficiencia" && this.state.ValvulaMitralAnormal == "Anormal" ?
                              <td>
                                <select value={this.state.OtrosValvulaMitralI} onChange={this.OtrosValvulaMitralI}>
                                  <option>Leve</option>
                                  <option>Leve a moderada</option>
                                  <option>Moderada</option>
                                  <option>Moderada a severa</option>
                                  <option>Severa</option>
                                  <option>THP</option>
                                  <option>Otros</option>
                                </select>
                              </td>
                              : this.state.ValvulaMitralIE == "Estenosis" && this.state.ValvulaMitralAnormal == "Anormal" ?
                                <td>
                                  <select value={this.state.OtrosValvulaMitralE} onChange={this.OtrosValvulaMitralE}>
                                    <option>Leve</option>
                                    <option>Leve a moderada</option>
                                    <option>Moderada</option>
                                    <option>Moderada a severa</option>
                                    <option>Severa</option>
                                    <option>Otros</option>
                                  </select>
                                </td>
                                : null
                          }
                          {
                            (this.state.OtrosValvulaMitralI == "Otros" || this.state.OtrosValvulaMitralE == "Otros") && this.state.ValvulaMitralAnormal == "Anormal" ?
                              <td>
                                <Input placeholder="Otros" type="text" />
                              </td>
                              : null
                          }


                        </tr>
                      </table>

                    
                    </Col>

                  </Row>



                  <Row>
                    <Col md="4">
                      <table>
                        <tr>
                          <td>
                            <label>TRICUSPIDE:</label>
                          </td>
                          <td>
                            <Input placeholder="V maxima" type="text" />
                          </td>
                          <td>
                            <Input placeholder="Gradiente pico" type="text" />
                          </td>
                          <td>
                            <Input placeholder="Gradiente medio" type="text" />
                          </td>
                        </tr>
                      </table>
                    </Col>
                    <Col md="8">
                      <table>
                        <tr>

                        <td>
                            <select value={this.state.ValviaTricuspide} onChange={this.ValviaTricuspide}>
                              <option>Balvia</option>
                              <option>Trivalvia</option>
                            </select>  

                          </td>

                        <td>
                        <Input placeholder="Area planimetría" type="text" />                 
                          </td>
                        <td>
                            <label>Protesis:</label>
                          </td>
                          <td>
                          <select value={this.state.ProtesisTricuspide} onChange={this.ProtesisTricuspide}>
                              <option>Si</option>
                              <option>No</option>
                            </select>  
                          </td>
                          {this.state.ProtesisTricuspide == "Si" ?
                          <td>
                            <select>
                              <option>Mecanica</option>
                              <option>Biologica</option>
                            </select>
                            </td>

                          : null

                          }
                           <td>
                            <label>Endocarditis:</label>
                          </td>
                          <td>
                            <select>
                              <option>Si</option>
                              <option>No</option>
                            </select>
                          </td>
                          </tr>
                      </table>

                    </Col>

                  </Row>

                  <Row>
                    <Col md="12">
                  <table>
                        <tr>
                      <td>
                            <select value={this.state.ValvulaTricuspideAnormal} onChange={this.ValvulaTricuspideAnormal}>
                              <option>Normal</option>
                              <option>Anormal</option>
                            </select>
                          </td>

                          {
                            this.state.ValvulaTricuspideAnormal == "Anormal" ?

                              <td>
                                <select value={this.state.ValvulaTricuspideIE} onChange={this.ValvulaTricuspideIE}>
                                  <option>Insuficiencia</option>
                                  <option>Estenosis</option>
                                </select>
                              </td>

                              : null

                          }
                          {
                            this.state.ValvulaTricuspideIE == "Insuficiencia" && this.state.ValvulaTricuspideAnormal == "Anormal" ?
                              <td>
                                <select value={this.state.OtrosValvulaTricuspideI} onChange={this.OtrosValvulaTricuspideI}>
                                  <option>Leve</option>
                                  <option>Leve a moderada</option>
                                  <option>Moderada</option>
                                  <option>Moderada a severa</option>
                                  <option>Severa</option>
                                  <option>Otros</option>
                                </select>
                              </td>
                              : this.state.ValvulaTricuspideIE == "Estenosis" && this.state.ValvulaTricuspideAnormal == "Anormal" ?
                                <td>
                                  <select value={this.state.OtrosValvulaTricuspideE} onChange={this.OtrosValvulaTricuspideE}>
                                    <option>Leve</option>
                                    <option>Leve a moderada</option>
                                    <option>Moderada</option>
                                    <option>Moderada a severa</option>
                                    <option>Severa</option>
                                    <option>Otros</option>
                                  </select>
                                </td>
                                : null
                          }
                          {
                            (this.state.OtrosValvulaTricuspideI == "Otros" || this.state.OtrosValvulaTricuspideE == "Otros") && this.state.ValvulaTricuspideAnormal == "Anormal" ?
                              <td>
                                <Input placeholder="Otros" type="text" />
                              </td>
                              : null
                          }
                          <td>
                            <label>THP:</label>
                            </td>
                            <td>
                            <Input placeholder="THP" type="text" />
                          </td>


                          <td>
                            <label>Disfunción:</label>
                            </td>
                            <td>
                            <select>
                              <option>Si</option>
                              <option>No</option>
                            </select>
                          </td>

                          <td>
                            <label>PSAP:</label>
                            </td>
                            <td>
                            <Input placeholder="PSAP" type="text" />
                          </td>


</tr>
                      </table>
                      </Col>
                  </Row>  

                  <Row>
                    <Col md="12">
                    <label>Ventricúlo izquierdo</label>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="2">
                    <label>Masa de vi</label>
                    <Input placeholder="Formula" type="text" />                    
                    </Col>
                    <Col md="2">
                      <label>Función sistolica:</label>
                      <select>
                        <option>Normal</option>
                        <option>Anormal</option>
                      </select>
                    </Col>
                    <Col md="2">
                      <label>Volumen final diastole:</label>
                      <Input placeholder="Volumen final" type="text" />
                    </Col>

                    <Col md="2">
                      <label>Volumen final sistole:</label>
                      <Input placeholder="Volumen final" type="text" />
                    </Col>

                    <Col md="2">
                      <label>Fe:</label>
                      <Input placeholder="Volumen final" type="text" />
                    </Col>

                    <Col md="2">
                      <label>Strain longitudinal:</label>
                      <Input placeholder="Strain longitudinal" type="text" />
                    </Col>
                    
                  </Row>

                  <Row>
                    <Col md="12">
                      <table>
                        <tr>
                          <td><label>Función diastolica:</label></td>
                          <td><Input placeholder="Onda E (Cm/s)" type="text" /></td>
                          <td><Input placeholder="Onda A (Cm/s)" type="text" /></td>
                          <td><Input placeholder="Relación E/A" type="text" /></td>
                          <td><Input placeholder="Promedio relación E/E" type="text" /></td>
                        </tr>
                        <tr>
                          <td>
                            <select value={this.state.EfuncionDiastolica} onChange={this.EfuncionDiastolica}>
                              <option>Normal</option>
                              <option>Anormal</option>
                            </select>
                          </td>
                          {this.state.EfuncionDiastolica == 'Anormal' ?
                            <div>
                              <select value={this.state.VDisfuncion} onChange={this.VDisfuncion}>
                                <option>Disfunción tipo I</option>
                                <option>Disfunción tipo II</option>
                                <option>Disfunción tipo III</option>
                                <option>Otros</option>
                              </select>
                            </div>
                            : null}

                          {
                            this.state.VDisfuncion == 'Otros' && this.state.EfuncionDiastolica == 'Anormal' ?
                              <td>
                                <Input placeholder="Otros" type="text" />
                              </td>
                              : null
                          }
                        </tr>
                      </table>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="2">
                    <label>Raíz aortica y aorta:</label>
                    <select>
                      <option>Normal</option>
                      <option>Anormal</option>
                    </select>
                    </Col>
                    <Col md="2">
                    <label>Disección:</label>
                     <select>
                       <option>Si</option>
                       <option>No</option>
                     </select>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="2">
                      <label>Venas cavas:</label>
                      <Input placeholder="Otros" type="text" />
                    </Col>
                  </Row>


                    <Row>
                      <Col md='12'>
                        <p>El paciente y/o acudiente informa que está en ayunas. Se explico al paciente y/o acudiente, los posibles riesgos previsibles y la existencia de otros imprevisibles que podría tener el procedimiento. El paciente y/o acudiente dicen entender, aceptar y para constancia se firma el consentimiento para la práctica del estudio. Se realiza sedación con anestesia tópica local con xilocaina jalea y spray. Pasó de la sonda sin dificultad.
                      
                      Se practicó ESTUDIO DE ECOCARDIOGRAMA TRANSESOFAGICO, desde las proyecciones transgástrica y trasesofágica convencionales, con la utilización complementaria de Doppler pulsado, continúo y color, procedimiento realizado con equipo Epiq 7c  con sonda multiplano con angulaciones de 0 a 180º, con los siguientes hallazgos:
                      </p>
                      </Col>
                    </Row>
                    <Row>

                      <Col md='12'>




                        <div className="App">
                          <CKEditor
                            editor={ClassicEditor}
                            data="<h5>DESCRIPCION GENERAL</h5>
                            <ol>
                               <li>
                               
                               La aurícula izquierda (área de cm2 y volumen de ml/m2) es normal y mediante este método diagnóstico no se detectaron trombos o masas en su interior. 
                               Se observó la auriculilla izquierda de forma normal y sin trombos o masas en el interior. 
                               La velocidad a este nivel medida mediante el sistema Doppler pulsado esta normal en cm/seg. 
                               El drenaje venoso visualizado es normal. El Septo interauricular se observa integro sin defectos.
                               
                               </li>
                               <li>
                               
                               Válvula mitral tiene características adecuadas. El aparato subvalvular mitral es normal. 
                               No hay gradientes significativos a través de la misma.
                               
                               </li>
                               <li>
                               
                                El ventrículo izquierdo. La cavidad ventricular guarda su forma elipsoide usual y el diámetro de las cavidades es normal.
                                IMVI: # g/m2  No se observa alteraciones segmentarias de contractilidad miocárdica regional en reposo. No se demostraron, 
                                mediante este sistema de diagnóstico masas o trombos al interior de la cavidad. La fracción de eyección se estima normal. 
                                Función diastólica normal. 

                               </li>
                               <li>
                               
                               Válvula aórtica trivalva tiene características adecuadas V.max: m/seg. GP: mmHg. Área por planimetría de cm2. 

                               </li>
                               <li>
                               
                               La raíz aórtica tiene un diámetro normal y presenta aspecto adecuado. La salida de las arterias coronarias es normal. 
                               La aorta en la porción ascendente hasta cm del anillo, y el arco aórtico observado, se descartan con signos de disección 
                               o placas ateromatosas complicadas. Aorta descendente normal.

                               </li>

                               <li>
                               
                               Venas cavas con llegada a la aurícula normal. Aurícula derecha (área de # cm2 y volumen de # ml/m2) 
                               de estructura normal sin masas o trombos en su interior.
                               
                               </li>
                               <li>
                               Válvula tricúspide de características adecuadas e implantación normal. PSAP: # mmHg.
                               </li>
                               <li>
                               El ventrículo derecho es de aspecto usual y no presenta alteraciones de contractilidad en el reposo. 
                               La función sistólica se consideró normal.
                               </li>
                               <li>
                               El septum interventricular se aprecia íntegro. No hay evidencias de cortocircuitos a 
                               través del mismo que sea demostrable mediante este método diagnóstico. 
                               </li>
                               <li>
                               Pericardio normal.
                               </li>
                            


                            </ol>
                            
                            <h5>CONCLUSIONES</h5>
                            <ol>
                            <li>Función ventricular izquierda conservada FEVI %.</li>
                            <li>No evidencia de masas o trombos intracavitarios en el momento.</li>

                            </ol>
                            
                            "
                            onInit={editor => {
                              // You can store the "editor" and use when it is needed.
                              console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event, editor) => {
                              const data = editor.getData();
                              console.log({ event, editor, data });
                            }}
                            onBlur={editor => {
                              console.log('Blur.', editor);
                            }}
                            onFocus={editor => {
                              console.log('Focus.', editor);
                            }}
                          />
                        </div>
                      </Col>

                    </Row>

                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}


export default ECOCARDIOGRAM_TRASNSESOFAGICO;
