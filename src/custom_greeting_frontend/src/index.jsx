import * as React from "react";
import { render } from "react-dom";
import { custom_greeting } from "../../declarations/custom_greeting";
import { custom_greeting_backend } from "../../declarations/custom_greeting_backend/index";
import { PlugWallet } from "@connect2ic/core/providers/plug-wallet"
import "/home/dokhanh/custom_greeting/src/bulma.min.css";
import PlugConnect from '@psychedelic/plug-connect';
import "/home/dokhanh/custom_greeting/src/custom_greeting_frontend/src/nice.jsx"
import { NavLink } from 'react-router-dom';
import { useState } from 'react'
import Contact from "./nice"

import {Route, Link} from 'react-router-dom';



async function button(){

  
  // Canister Ids
  const nnsCanisterId = 'qoctq-giaaa-aaaaa-aaaea-cai'

  // Whitelist
  const whitelist = [
    nnsCanisterId,
  ];

  // Make the request
  const isConnected = await window.ic.plug.requestConnect({
    whitelist,
  });

  // Get the user principal id
  const principalId = await window.ic.plug.agent.getPrincipal();

  document.getElementById("princi").innerText = principalId;
}

const MyHello = () => {
  
  return (
    <div className="App">
    <div className="outPopUp">
    <div className="faucit">
      <div className="is-size-2">
        Welcome to the World of of Blockchain!
      </div>
      <button className="button is-primary mr-2"
              onClick = {() =>
                button()
              }
      >
       Connect
       </button>

       <button className="button is-link"> Customer list</button>

    <div>
    </div>
    </div>
  </div>
  
  </div>

 
  );
};  

render(<MyHello />, document.getElementById("app"));
