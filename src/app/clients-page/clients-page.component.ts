import { Component, OnInit } from '@angular/core';

const CLIENTS = [
  {
    src      : "assets/images/clients/docker_logo.png",
    srcMono  : "assets/images/clients/docker_logoMono.png",
    url      : "https://www.docker.com/"
  },{
    src      : "assets/images/clients/mirantis.png",
    srcMono  : "assets/images/clients/mirantisMono.png",
    url      : "https://www.mirantis.com/"
  },{
    src      : "assets/images/clients/hortonworks_logo.png",
    srcMono  : "assets/images/clients/hortonworks_logoMono.png",
    url      : "https://www.cloudera.com/"
  },{
    src      : "assets/images/clients/cloudera-logo.png",
    srcMono  : "assets/images/clients/cloudera-logoMono.png",
    url      : "https://www.cloudera.com/"
  },{
    src      : "assets/images/clients/Cider1.png",
    srcMono  : "assets/images/clients/Cider1Mono.png",
    url      : "https://getcider.com/"
  },{
    src      : "assets/images/clients/cloud-alliance-partner-logo.png",
    srcMono  : "assets/images/clients/cloud-alliance-partner-logoMono.png",
    url      : "http://www.salesforce.com/"
  },{
    src      : "assets/images/clients/confluent-logo.png",
    srcMono  : "assets/images/clients/confluent-logoMono.png",
    url      : "https://www.confluent.io/"
  },{
    src      : "assets/images/clients/coreos_logo.png",
    srcMono  : "assets/images/clients/coreos_logoMono.png",
    url      : "https://coreos.com/"
  },{
    src      : "assets/images/clients/ct_logo_blue.png",
    srcMono  : "assets/images/clients/ct_logo_blueMono.png",
    url      : "http://www.customertimes.com/"
  },{
    src      : "assets/images/clients/foxt_logo.png",
    srcMono  : "assets/images/clients/foxt_logoMono.png",
    url      : "http://www.foxt.com/"
  },{
    src      : "assets/images/clients/front-logo.png",
    srcMono  : "assets/images/clients/front-logoMono.png",
    url      : "https://frontapp.com/"
  },{
    src      : "assets/images/clients/greatwater1.png",
    srcMono  : "assets/images/clients/greatwater1Mono.png",
    url      : "https://www.greatwater.us/"
  },{
    src      : "assets/images/clients/joor_logo.png",
    srcMono  : "assets/images/clients/joor_logoMono.png",
    url      : "https://joor.com/"
  },{
    src      : "assets/images/clients/marchex-logo.png",
    srcMono  : "assets/images/clients/marchex-logoMono.png",
    url      : "https://www.marchex.com/"
  },{
    src      : "assets/images/clients/Mattermost-logo.png",
    srcMono  : "assets/images/clients/Mattermost-logoMono.png",
    url      : "https://mattermost.com/"
  },{
    src      : "assets/images/clients/meet-elise1.png",
    srcMono  : "assets/images/clients/meet-elise1Mono.png",
    url      : "https://www.meetelise.com/"
  },{
    src      : "assets/images/clients/newsela_logo.png",
    srcMono  : "assets/images/clients/newsela_logoMono.png",
    url      : "https://www.newsela.com/"
  },{
    src      : "assets/images/clients/panda_logo.png",
    srcMono  : "assets/images/clients/panda_logoMono.png",
    url      : "https://redpanda.com/"
  },{
    src      : "assets/images/clients/pnp_logo.png",
    srcMono  : "assets/images/clients/pnp_logoMono.png",
    url      : "https://www.plugandplaytechcenter.com/"
  },{
    src      : "assets/images/clients/people-ai.png",
    srcMono  : "assets/images/clients/people-aiMono.png",
    url      : "https://people.ai/"
  },{
    src      : "assets/images/clients/redhat_logo.png",
    srcMono  : "assets/images/clients/redhat_logoMono.png",
    url      : "https://redhat.com/"
  },{
    src      : "assets/images/clients/ringlead_logo.png",
    srcMono  : "assets/images/clients/ringlead_logoMono.png",
    url      : "https://www.ringlead.com/"
  },{
    src      : "assets/images/clients/room1.png",
    srcMono  : "assets/images/clients/room1Mono.png",
    url      : "https://room.com/"
  },{
    src      : "assets/images/clients/salt_logo.png",
    srcMono  : "assets/images/clients/salt_logoMono.png",
    url      : "https://salt.security/"
  },{
    src      : "assets/images/clients/scylladb-logo.png",
    srcMono  : "assets/images/clients/scylladb-logoMono.png",
    url      : "https://www.scylladb.com/"
  },{
    src      : "assets/images/clients/seismic-logo.png",
    srcMono  : "assets/images/clients/seismic-logoMono.png",
    url      : "https://seismic.com/"
  },{
    src      : "assets/images/clients/hasura_logo.png",
    srcMono  : "assets/images/clients/hasura_mono_logo.png",
    url      : "https://hasura.io/"
  },{
    src      : "assets/images/clients/shujinko_logo.png",
    srcMono  : "assets/images/clients/shujinko_logoMono.png",
    url      : "https://www.shujinko.io/"
  },{
    src      : "assets/images/clients/sonder_logo.png",
    srcMono  : "assets/images/clients/sonder_logoMono.png",
    url      : "https://www.sonder.com/"
  },{
    src      : "assets/images/clients/soul-machines.png",
    srcMono  : "assets/images/clients/soul-machinesMono.png",
    url      : "https://www.soulmachines.com/"
  },{
    src      : "assets/images/clients/stonehendge.png",
    srcMono  : "assets/images/clients/stonehendgeMono.png",
    url      : "https://www.stonehengenyc.com/"
  },{
    src      : "assets/images/clients/tipalti_logo.png",
    srcMono  : "assets/images/clients/tipalti_logoMono.png",
    url      : "https://tipalti.com/"
  },{
    src      : "assets/images/clients/unravel-logo.png",
    srcMono  : "assets/images/clients/unravel-logoMono.png",
    url      : "https://unraveldata.com/"
  },{
    src      : "assets/images/clients/upflow_logo.png",
    srcMono  : "assets/images/clients/upflow_logoMono.png",
    url      : "https://upflow.io/en/"
  },{
    src      : "assets/images/clients/AuthenticID_logo.png",
    srcMono  : "assets/images/clients/AuthenticID_logoMono.png",
    url      : "https://authenticid.co/"
  },{
    src      : "assets/images/clients/billforward.png",
    srcMono  : "assets/images/clients/billforwardMono.png",
    url      : "https://www.billforward.net/"
  },{
    src      : "assets/images/clients/startree-logo.png",
    srcMono  : "assets/images/clients/startree-logo-mono.png",
    url      : "https://startree.ai/"
  },{
    src      : "assets/images/clients/cerebras-logo.png",
    srcMono  : "assets/images/clients/cerebras-logoMono.png",
    url      : "https://www.cerebras.net/"
  },{
    src      : "assets/images/clients/ceros_logo.jpg",
    srcMono  : "assets/images/clients/ceros_logoMono.png",
    url      : "https://www.ceros.com/"
  },{
    src      : "assets/images/clients/brex_logo.png",
    srcMono  : "assets/images/clients/brex_logoMono.png",
    url      : "https://www.brex.com/"
  }
]
@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.css']
})
export class ClientsPageComponent implements OnInit {

  clients;

  constructor() { 
    this.clients = CLIENTS.map((client, index) => {
      let delay = index * 0.15;
      return {
        animation : `fade-in 0.8s ${delay}s forwards cubic-bezier(0.11, 0, 0.5, 0)`,
        ...client
      }
    });
  }

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