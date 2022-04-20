import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.css']
})
export class ClientsPageComponent implements OnInit {

  clients = [
    {
      src      : "assets/images/clients/Cider1.png",
      srcMono  : "assets/images/clients/Cider1Mono.png",
      animation: "fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://getcider.com/"
    }
    ,{
      src      : "assets/images/clients/cloud-alliance-partner-logo.png",
      srcMono  : "assets/images/clients/cloud-alliance-partner-logoMono.png",
      animation: "fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "http://www.salesforce.com/"
    },{
      src      : "assets/images/clients/cloudera-logo.png",
      srcMono  : "assets/images/clients/cloudera-logoMono.png",
      animation: "fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://www.cloudera.com/"
    },{
      src      : "assets/images/clients/confluent-logo.png",
      srcMono  : "assets/images/clients/confluent-logoMono.png",
      animation: "fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://www.confluent.io/"
    },{
      src      : "assets/images/clients/coreos_logo.png",
      srcMono  : "assets/images/clients/coreos_logoMono.png",
      animation: "fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://coreos.com/"
    },{
      src      : "assets/images/clients/ct_logo_blue.png",
      srcMono  : "assets/images/clients/ct_logo_blueMono.png",
      animation: "fade-in 0.8s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "http://www.customertimes.com/"
    },{
      src      : "assets/images/clients/foxt_logo.png",
      srcMono  : "assets/images/clients/foxt_logoMono.png",
      animation: "fade-in 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "http://www.foxt.com/"
    },{
      src      : "assets/images/clients/front-logo.png",
      srcMono  : "assets/images/clients/front-logoMono.png",
      animation: "fade-in 0.8s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://frontapp.com/"
    },{
      src      : "assets/images/clients/greatwater1.png",
      srcMono  : "assets/images/clients/greatwater1Mono.png",
      animation: "fade-in 0.8s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://www.greatwater.us/"
    },{
      src      : "assets/images/clients/hortonworks_logo.png",
      srcMono  : "assets/images/clients/hortonworks_logoMono.png",
      animation: "fade-in 0.8s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://www.cloudera.com/"
    },{
      src      : "assets/images/clients/joor_logo.png",
      srcMono  : "assets/images/clients/joor_logoMono.png",
      animation: "fade-in 0.8s 1.6s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://joor.com/"
    },{
      src      : "assets/images/clients/marchex-logo.png",
      srcMono  : "assets/images/clients/marchex-logoMono.png",
      animation: "fade-in 0.8s 1.7s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://www.marchex.com/"
    },{
      src      : "assets/images/clients/masterdata_logo.jpg",
      srcMono  : "assets/images/clients/masterdata_logoMono.png",
      animation: "fade-in 0.8s 1.8s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "http://www.masterdata.ru/"
    },{
      src      : "assets/images/clients/Mattermost-logo.png",
      srcMono  : "assets/images/clients/Mattermost-logoMono.png",
      animation: "fade-in 0.8s 1.9s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://mattermost.com/"
    },{
      src      : "assets/images/clients/meet-elise1.png",
      srcMono  : "assets/images/clients/meet-elise1Mono.png",
      animation: "fade-in 0.8s 2.0s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://www.meetelise.com/"
    },{
      src      : "assets/images/clients/mirantis.png",
      srcMono  : "assets/images/clients/mirantisMono.png",
      animation: "fade-in 0.8s 2.1s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://www.mirantis.com/"
    },{
      src      : "assets/images/clients/newsela_logo.png",
      srcMono  : "assets/images/clients/newsela_logoMono.png",
      animation: "fade-in 0.8s 2.2s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://www.newsela.com/"
    },{
      src      : "assets/images/clients/panda_logo.png",
      srcMono  : "assets/images/clients/panda_logoMono.png",
      animation: "fade-in 0.8s 2.3s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://redpanda.com/"
    },{
      src      : "assets/images/clients/pnp_logo.png",
      srcMono  : "assets/images/clients/pnp_logoMono.png",
      animation: "fade-in 0.8s 2.4s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://www.plugandplaytechcenter.com/"
    },{
      src      : "assets/images/clients/people-ai.png",
      srcMono  : "assets/images/clients/people-aiMono.png",
      animation: "fade-in 0.8s 2.5s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://people.ai/"
    },{
      src      : "assets/images/clients/redhat_logo.png",
      srcMono  : "assets/images/clients/redhat_logoMono.png",
      animation: "fade-in 0.8s 2.6s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://redhat.com/"
    },{
      src      : "assets/images/clients/ringlead_logo.png",
      srcMono  : "assets/images/clients/ringlead_logoMono.png",
      animation: "fade-in 0.8s 2.7s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://www.ringlead.com/"
    },{
      src      : "assets/images/clients/room1.png",
      srcMono  : "assets/images/clients/room1Mono.png",
      animation: "fade-in 0.8s 2.8s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://room.com/"
    },{
      src      : "assets/images/clients/salt_logo.png",
      srcMono  : "assets/images/clients/salt_logoMono.png",
      animation: "fade-in 0.8s 2.9s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://salt.security/"
    },{
      src      : "assets/images/clients/scylladb-logo.png",
      srcMono  : "assets/images/clients/scylladb-logoMono.png",
      animation: "fade-in 0.8s 3.0s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://www.scylladb.com/"
    },{
      src      : "assets/images/clients/seismic-logo.png",
      srcMono  : "assets/images/clients/seismic-logoMono.png",
      animation: "fade-in 0.8s 3.1s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://seismic.com/"
    },{
      src      : "assets/images/clients/semantria_logo.png",
      srcMono  : "assets/images/clients/semantria_logoMono.png",
      animation: "fade-in 0.8s 3.2s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://semantria.com/"
    },{
      src      : "assets/images/clients/shujinko_logo.png",
      srcMono  : "assets/images/clients/shujinko_logoMono.png",
      animation: "fade-in 0.8s 3.3s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://www.shujinko.io/"
    },{
      src      : "assets/images/clients/sonder_logo.png",
      srcMono  : "assets/images/clients/sonder_logoMono.png",
      animation: "fade-in 0.8s 3.4s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://www.sonder.com/"
    },{
      src      : "assets/images/clients/soul-machines.png",
      srcMono  : "assets/images/clients/soul-machinesMono.png",
      animation: "fade-in 0.8s 3.5s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://www.soulmachines.com/"
    },{
      src      : "assets/images/clients/stonehendge.png",
      srcMono  : "assets/images/clients/stonehendgeMono.png",
      animation: "fade-in 0.8s 3.6s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://www.stonehengenyc.com/"
    },{
      src      : "assets/images/clients/docker_logo.png",
      srcMono  : "assets/images/clients/docker_logoMono.png",
      animation: "fade-in 0.8s 3.7s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://www.docker.com/"
    },{
      src      : "assets/images/clients/tipalti_logo.png",
      srcMono  : "assets/images/clients/tipalti_logoMono.png",
      animation: "fade-in 0.8s 3.8s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://tipalti.com/"
    },{
      src      : "assets/images/clients/unravel-logo.png",
      srcMono  : "assets/images/clients/unravel-logoMono.png",
      animation: "fade-in 0.8s 3.9s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://unraveldata.com/"
    },{
      src      : "assets/images/clients/upflow_logo.png",
      srcMono  : "assets/images/clients/upflow_logoMono.png",
      animation: "fade-in 0.8s 4.0s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://upflow.io/en/"
    },{
      src      : "assets/images/clients/AuthenticID_logo.png",
      srcMono  : "assets/images/clients/AuthenticID_logoMono.png",
      animation: "fade-in 0.8s 4.1s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://authenticid.co/"
    },{
      src      : "assets/images/clients/billforward.png",
      srcMono  : "assets/images/clients/billforwardMono.png",
      animation: "fade-in 0.8s 4.2s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://www.billforward.net/"
    },{
      src      : "assets/images/clients/bpmonline_logo1.png",
      srcMono  : "assets/images/clients/bpmonline_logo1Mono.png",
      animation: "fade-in 0.8s 4.3s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "http://www.bpmonline.com/"
    },{
      src      : "assets/images/clients/cerebras-logo.png",
      srcMono  : "assets/images/clients/cerebras-logoMono.png",
      animation: "fade-in 0.8s 4.4s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://www.cerebras.net/"
    },{
      src      : "assets/images/clients/ceros_logo.jpg",
      srcMono  : "assets/images/clients/ceros_logoMono.png",
      animation: "fade-in 0.8s 4.5s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      url      : "https://coreos.com/"
    }
  ]
  
  constructor() { }

  ngOnInit(): void { }

  onVisible(element: HTMLElement) {
    if (!element.classList.contains("active")) {
      element.classList.add("active");
    }
  }

  onInVisible(element: HTMLElement) {
    element.classList.remove("active");
  }
}
