﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Rpavy
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Терминал.
    /// </summary>
    // *** Start programmer edit section *** (Терминал CustomAttributes)

    // *** End programmer edit section *** (Терминал CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТерминалE", new string[] {
            "Номер as \'Номер\'"})]
    [View("ТерминалL", new string[] {
            "Номер as \'Номер\'"})]
    public class Терминал : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомер;
        
        // *** Start programmer edit section *** (Терминал CustomMembers)

        // *** End programmer edit section *** (Терминал CustomMembers)

        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (Терминал.Номер CustomAttributes)

        // *** End programmer edit section *** (Терминал.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (Терминал.Номер Get start)

                // *** End programmer edit section *** (Терминал.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (Терминал.Номер Get end)

                // *** End programmer edit section *** (Терминал.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Терминал.Номер Set start)

                // *** End programmer edit section *** (Терминал.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (Терминал.Номер Set end)

                // *** End programmer edit section *** (Терминал.Номер Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТерминалE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТерминалE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТерминалE", typeof(IIS.Rpavy.Терминал));
                }
            }
            
            /// <summary>
            /// "ТерминалL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТерминалL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТерминалL", typeof(IIS.Rpavy.Терминал));
                }
            }
        }
    }
}
