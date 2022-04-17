import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.css']
})
export class ClientsPageComponent implements OnInit {

  clients = [
    {
      src      : "assets/images/clients/AuthenticID_logo.png",
      animation: "fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/billforward.png",
      animation: "fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/bpmonline_logo1.png",
      animation: "fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/cerebras-logo.png",
      animation: "fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/ceros_logo.jpg",
      animation: "fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/Cider1.png",
      animation: "fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/cloud-alliance-partner-logo.png",
      animation: "fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/cloudera-logo.png",
      animation: "fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/confluent-logo.png",
      animation: "fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/coreos_logo.png",
      animation: "fade-in 0.8s 1.0s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/ct_logo_blue.png",
      animation: "fade-in 0.8s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/docker_logo.png",
      animation: "fade-in 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/foxt_logo.png",
      animation: "fade-in 0.8s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/front-logo.png",
      animation: "fade-in 0.8s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/greatwater1.png",
      animation: "fade-in 0.8s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/hortonworks_logo.png",
      animation: "fade-in 0.8s 1.6s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/joor_logo.png",
      animation: "fade-in 0.8s 1.7s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/marchex-logo.png",
      animation: "fade-in 0.8s 1.8s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/masterdata_logo.jpg",
      animation: "fade-in 0.8s 1.9s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/Mattermost-logo.png",
      animation: "fade-in 0.8s 2.0s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/meet-elise1.png",
      animation: "fade-in 0.8s 2.1s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/mirantis.png",
      animation: "fade-in 0.8s 2.2s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/newsela_logo.png",
      animation: "fade-in 0.8s 2.3s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/panda_logo.png",
      animation: "fade-in 0.8s 2.4s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/pnp_logo.png",
      animation: "fade-in 0.8s 2.5s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/people-ai.png",
      animation: "fade-in 0.8s 2.6s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/redhat_logo.png",
      animation: "fade-in 0.8s 2.7s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/ringlead_logo.png",
      animation: "fade-in 0.8s 2.8s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/room1.png",
      animation: "fade-in 0.8s 2.9s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/salt_logo.png",
      animation: "fade-in 0.8s 3.0s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/scylladb-logo.png",
      animation: "fade-in 0.8s 3.1s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/seismic-logo.png",
      animation: "fade-in 0.8s 3.2s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/semantria_logo.png",
      animation: "fade-in 0.8s 3.3s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/shujinko_logo.png",
      animation: "fade-in 0.8s 3.4s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/sonder_logo.png",
      animation: "fade-in 0.8s 3.5s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/soul-machines.png",
      animation: "fade-in 0.8s 3.6s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/stonehendge.png",
      animation: "fade-in 0.8s 3.7s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/docker_logo.png",
      animation: "fade-in 0.8s 3.8s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/tipalti_logo.png",
      animation: "fade-in 0.8s 3.9s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/unravel-logo.png",
      animation: "fade-in 0.8s 4.0s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    },{
      src      : "assets/images/clients/upflow_logo.png",
      animation: "fade-in 0.8s 4.1s forwards cubic-bezier(0.11, 0, 0.5, 0)"
    }
  ]
  
  constructor() { }

  ngOnInit(): void { }

}
